import { GetAllSentCartsFromCheffUseCaseDTO } from "./GetAllSentCartsFromCheffUseCaseDTO";
import { CartsRepositoryDTO } from "../../repositories/Carts/CartsRepositoryDTO";

class GetAllSentCartsFromCheffUseCase
  implements
    GetAllSentCartsFromCheffUseCaseDTO.IGetAllSentCartsFromCheffUseCase
{
  constructor(
    private readonly cartsRepository: CartsRepositoryDTO.ICartsRepository
  ) {}

  public async execute({
    cheffId
  }: GetAllSentCartsFromCheffUseCaseDTO.ExecuteDTO): GetAllSentCartsFromCheffUseCaseDTO.ExecuteResponseDTO {
    return this.cartsRepository.findByStatusAndCheffId({
      status: "sent",
      cheffId
    });
  }
}

export { GetAllSentCartsFromCheffUseCase };
