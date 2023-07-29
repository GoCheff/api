import { ApproveCustomerCartUseCaseDTO } from "./ApproveCustomerCartUseCaseDTO";
import { CartsRepositoryDTO } from "../../repositories/Carts/CartsRepositoryDTO";
import { AppError } from "../../errors/AppError";
import { NotFoundError } from "../../errors/NotFoundError";

class ApproveCustomerCartUseCase
  implements ApproveCustomerCartUseCaseDTO.IApproveCustomerCartUseCase
{
  constructor(
    private readonly cartsRepository: CartsRepositoryDTO.ICartsRepository
  ) {}

  public async execute({
    cartId
  }: // @ts-ignore
  ApproveCustomerCartUseCaseDTO.ExecuteDTO): ApproveCustomerCartUseCaseDTO.ExecuteResponseDTO {
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

    return await this.cartsRepository.update({
      ...cart,
      status: "approved"
    });
  }
}

export { ApproveCustomerCartUseCase };
