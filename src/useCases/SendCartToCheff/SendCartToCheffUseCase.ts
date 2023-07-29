import { SendCartToCheffUseCaseDTO } from "./SendCartToCheffUseCaseDTO";
import { CartsRepositoryDTO } from "../../repositories/Carts/CartsRepositoryDTO";
import { AppError } from "../../errors/AppError";
import { NotFoundError } from "../../errors/NotFoundError";

class SendCartToCheffUseCase
  implements SendCartToCheffUseCaseDTO.ISendCartToCheffUseCase
{
  constructor(
    private readonly cartsRepository: CartsRepositoryDTO.ICartsRepository
  ) {}

  async execute({
    cartId
  }: SendCartToCheffUseCaseDTO.ExecuteDTO): SendCartToCheffUseCaseDTO.ExecuteResponseDTO {
    const cart = await this.cartsRepository.findById({
      id: cartId,
      include: {
        cartItems: true
      }
    });

    if (!cart) {
      throw new NotFoundError("Cart not found");
    }

    if (cart.status !== "open") {
      throw new AppError("Cart is not open", 409);
    }

    if (cart.cartItems.length === 0) {
      throw new AppError("Cart is empty", 409);
    }

    return this.cartsRepository.update({
      ...cart,
      status: "sent"
    });
  }
}

export { SendCartToCheffUseCase };
