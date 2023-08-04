import { GetAllCartsFromCheffUseCaseDTO } from "./GetAllCartsFromCheffUseCaseDTO";
import { CartsRepositoryDTO } from "../../repositories/Carts/CartsRepositoryDTO";

class GetAllCartsFromCheffUseCase
  implements GetAllCartsFromCheffUseCaseDTO.IGetAllCartsFromCheffUseCase
{
  constructor(
    private readonly cartsRepository: CartsRepositoryDTO.ICartsRepository
  ) {}

  public async execute({
    cheffId
  }: GetAllCartsFromCheffUseCaseDTO.ExecuteDTO): GetAllCartsFromCheffUseCaseDTO.ExecuteResponseDTO {
    return this.cartsRepository.findByCheffId({ cheffId });
  }
}

export { GetAllCartsFromCheffUseCase };
