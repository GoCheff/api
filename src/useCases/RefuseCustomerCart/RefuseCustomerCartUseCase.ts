import { RefuseCustomerCartUseCaseDTO } from "./RefuseCustomerCartUseCaseDTO";
import { CartsRepositoryDTO } from "../../repositories/Carts/CartsRepositoryDTO";
import { AppError } from "../../errors/AppError";
import { NotFoundError } from "../../errors/NotFoundError";
import { CART_IS_NOT_SENT, CART_NOT_FOUND } from "../../data/texts";

class RefuseCustomerCartUseCase
  implements RefuseCustomerCartUseCaseDTO.IRefuseCustomerCartUseCase
{
  constructor(
    private readonly cartsRepository: CartsRepositoryDTO.ICartsRepository
  ) {}

  public async execute({
    cartId
  }: // @ts-ignore
  RefuseCustomerCartUseCaseDTO.ExecuteDTO): RefuseCustomerCartUseCaseDTO.ExecuteResponseDTO {
    const cart = await this.cartsRepository.findById({
      id: cartId,
      include: {
        cartItems: true
      }
    });

    if (!cart) {
      throw new NotFoundError(CART_NOT_FOUND);
    }

    if (cart.status !== "sent") {
      throw new AppError(CART_IS_NOT_SENT, 409);
    }

    return await this.cartsRepository.update({
      ...cart,
      status: "rejected"
    });
  }
}

export { RefuseCustomerCartUseCase };
