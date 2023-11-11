import { CreatePaymentToCartUseCaseDTO } from "./CreatePaymentToCartUseCaseDTO";
import { CartsRepositoryDTO } from "../../repositories/Carts/CartsRepositoryDTO";
import { AppError } from "../../errors/AppError";
import { NotFoundError } from "../../errors/NotFoundError";
import { CART_NOT_AVAILABLE_TO_PAY, CART_NOT_FOUND } from "../../data/texts";
import { environment } from "../../application/environment";
import { PaymentProviderDTO } from "../../providers/Payment/PaymentProviderDTO";

const { DOMAIN } = environment;

class CreatePaymentToCartUseCase
  implements CreatePaymentToCartUseCaseDTO.ICreatePaymentToCartUseCase
{
  constructor(
    private readonly cartsRepository: CartsRepositoryDTO.ICartsRepository,
    private readonly paymentProvider: PaymentProviderDTO.IPaymentProvider
  ) {}

  public async execute({
    cartId
  }: CreatePaymentToCartUseCaseDTO.ExecuteDTO): CreatePaymentToCartUseCaseDTO.ExecuteResponseDTO {
    const cart = await this.cartsRepository.findById({
      id: cartId,
      include: {
        cartItems: {
          include: {
            foodPlate: true
          }
        }
      }
    });

    if (!cart) {
      throw new NotFoundError(CART_NOT_FOUND);
    }

    if (cart.status !== "approved") {
      throw new AppError(CART_NOT_AVAILABLE_TO_PAY, 409);
    }

    const totalPrice = cart.cartItems
      .reduce((acc, cartItem) => {
        return Math.floor(acc + cartItem.foodPlate.price * cartItem.quantity);
      }, 0)
      .toFixed(2);

    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal"
      },
      redirect_urls: {
        return_url: `${DOMAIN}/payment-success?cartId=${cart.id}`,
        cancel_url: `${DOMAIN}/payment-canceled`
      },
      transactions: [
        {
          amount: {
            currency: "BRL",
            total: totalPrice.toString()
          },
          description: `Pagamento do carrinho ${cart.id} do usuário ${cart.customerId} no valor de R$ ${totalPrice}`
        }
      ]
    };

    let paymentLink = "";

    console.log(create_payment_json);

    try {
      paymentLink = await this.paymentProvider.createPayment(
        create_payment_json
      );
    } catch (error) {
      throw new AppError("Erro interno do Paypal", 500);
    }

    return {
      paymentLink,
      cart
    };
  }
}

export { CreatePaymentToCartUseCase };
