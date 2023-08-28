import { SendCartToCheffUseCaseDTO } from "./SendCartToCheffUseCaseDTO";
import { CartsRepositoryDTO } from "../../repositories/Carts/CartsRepositoryDTO";
import { AppError } from "../../errors/AppError";
import { NotFoundError } from "../../errors/NotFoundError";
import { CART_IS_EMPTY, CART_NOT_FOUND, CART_NOT_OPEN } from "../../data/texts";

class SendCartToCheffUseCase
  implements SendCartToCheffUseCaseDTO.ISendCartToCheffUseCase
{
  constructor(
    private readonly cartsRepository: CartsRepositoryDTO.ICartsRepository
  ) {}

  public async execute({
    cartId
  }: SendCartToCheffUseCaseDTO.ExecuteDTO): SendCartToCheffUseCaseDTO.ExecuteResponseDTO {
    const cart = await this.cartsRepository.findById({
      id: cartId,
      include: {
        cartItems: true
      }
    });

    if (!cart) {
      throw new NotFoundError(CART_NOT_FOUND);
    }

    if (cart.status !== "open") {
      throw new AppError(CART_NOT_OPEN, 409);
    }

    if (cart.cartItems.length === 0) {
      throw new AppError(CART_IS_EMPTY, 409);
    }

    return this.cartsRepository.update({
      ...cart,
      status: "sent"
    });
  }
}

export { SendCartToCheffUseCase };
