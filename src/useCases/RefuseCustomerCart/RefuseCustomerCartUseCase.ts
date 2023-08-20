import { RefuseCustomerCartUseCaseDTO } from "./RefuseCustomerCartUseCaseDTO";
import { CartsRepositoryDTO } from "../../repositories/Carts/CartsRepositoryDTO";
import { AppError } from "../../errors/AppError";
import { NotFoundError } from "../../errors/NotFoundError";

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
      throw new NotFoundError("Cart not found");
    }

    if (cart.status !== "sent") {
      throw new AppError("Cart is not sent", 409);
    }

    return await this.cartsRepository.update({
      ...cart,
      status: "rejected"
    });
  }
}

export { RefuseCustomerCartUseCase };
