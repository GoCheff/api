import { CancelCartToCheffUseCaseDTO } from "./CancelCartToCheffUseCaseDTO";
import { CartsRepositoryDTO } from "../../repositories/Carts/CartsRepositoryDTO";
import { AppError } from "../../errors/AppError";
import { NotFoundError } from "../../errors/NotFoundError";
import {
  CART_NOT_AVAILABLE_TO_CANCEL,
  CHEFF_NOT_FOUND
} from "../../data/texts";

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
      throw new NotFoundError(CHEFF_NOT_FOUND);
    }

    const availableStatus = ["open", "sent", "approved"];

    if (!availableStatus.includes(cart.status)) {
      throw new AppError(CART_NOT_AVAILABLE_TO_CANCEL, 409);
    }

    return this.cartsRepository.update({
      ...cart,
      status: "canceled"
    });
  }
}

export { CancelCartToCheffUseCase };
