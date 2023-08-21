import { GetAllCartsFromCustomerUseCaseDTO } from "./GetAllCartsFromCustomerUseCaseDTO";
import { CartsRepositoryDTO } from "../../repositories/Carts/CartsRepositoryDTO";

class GetAllCartsFromCustomerUseCase
  implements GetAllCartsFromCustomerUseCaseDTO.IGetAllCartsFromCustomerUseCase
{
  constructor(
    private readonly cartsRepository: CartsRepositoryDTO.ICartsRepository
  ) {}

  public async execute({
    customerId
  }: GetAllCartsFromCustomerUseCaseDTO.ExecuteDTO): GetAllCartsFromCustomerUseCaseDTO.ExecuteResponseDTO {
    return this.cartsRepository.findAllByCustomerId({ customerId });
  }
}

export { GetAllCartsFromCustomerUseCase };
