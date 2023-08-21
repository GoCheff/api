import { CancelCartToCheffUseCaseDTO } from "./CancelCartToCheffUseCaseDTO";
import { CartsRepositoryDTO } from "../../repositories/Carts/CartsRepositoryDTO";
import { AppError } from "../../errors/AppError";
import { NotFoundError } from "../../errors/NotFoundError";

class CancelCartToCheffUseCase
  implements CancelCartToCheffUseCaseDTO.ICancelCartToCheffUseCase
{
  constructor(
    private readonly cartsRepository: CartsRepositoryDTO.ICartsRepository
  ) {}

  public async execute({
    cartId
  }: CancelCartToCheffUseCaseDTO.ExecuteDTO): CancelCartToCheffUseCaseDTO.ExecuteResponseDTO {
    const cart = await this.cartsRepository.findById({
      id: cartId
    });

    if (!cart) {
      throw new NotFoundError("Cart not found");
    }

    const availableStatus = ["open", "sent", "approved"];

    if (!availableStatus.includes(cart.status)) {
      throw new AppError("Cart is not available to cancel", 409);
    }

    return this.cartsRepository.update({
      ...cart,
      status: "canceled"
    });
  }
}

export { CancelCartToCheffUseCase };
