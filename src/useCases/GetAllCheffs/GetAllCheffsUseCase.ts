import { GetAllCheffsUseCaseDTO } from "./GetAllCheffsUseCaseDTO";
import { CheffsRepositoryDTO } from "../../repositories/Users/Cheffs/CheffsRepositoryDTO";

class GetAllCheffsUseCase
  implements GetAllCheffsUseCaseDTO.IGetAllCheffsUseCase
{
  constructor(
    private readonly cheffsRepository: CheffsRepositoryDTO.ICheffsRepository
  ) {}

  public async execute(
    filters: GetAllCheffsUseCaseDTO.ExecuteDTO
  ): GetAllCheffsUseCaseDTO.ExecuteResponseDTO {
    return this.cheffsRepository.findWithMultipleFilters({
      ...filters,
      include: {
        foodPlates: true
      }
    });
  }
}

export { GetAllCheffsUseCase };
