import { GetAllPendingCheffsUseCaseDTO } from "./GetAllPendingCheffsUseCaseDTO";
import { CheffsRepositoryDTO } from "../../repositories/Users/Cheffs/CheffsRepositoryDTO";

class GetAllPendingCheffsUseCase
  implements GetAllPendingCheffsUseCaseDTO.IGetAllPendingCheffsUseCase
{
  constructor(
    private readonly cheffsRepository: CheffsRepositoryDTO.ICheffsRepository
  ) {}

  public async execute(): GetAllPendingCheffsUseCaseDTO.ExecuteResponseDTO {
    return this.cheffsRepository.findByStatus({
      registerStatus: "pending"
    });
  }
}

export { GetAllPendingCheffsUseCase };
