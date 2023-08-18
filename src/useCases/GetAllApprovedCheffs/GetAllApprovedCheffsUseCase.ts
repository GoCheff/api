import { GetAllApprovedCheffsUseCaseDTO } from "./GetAllApprovedCheffsUseCaseDTO";
import { CheffsRepositoryDTO } from "../../repositories/Users/Cheffs/CheffsRepositoryDTO";

class GetAllApprovedCheffsUseCase
  implements GetAllApprovedCheffsUseCaseDTO.IGetAllApprovedCheffsUseCase
{
  constructor(
    private readonly cheffsRepository: CheffsRepositoryDTO.ICheffsRepository
  ) {}

  public async execute(): GetAllApprovedCheffsUseCaseDTO.ExecuteResponseDTO {
    return this.cheffsRepository.findByStatus({
      registerStatus: "approved"
    });
  }
}

export { GetAllApprovedCheffsUseCase };
