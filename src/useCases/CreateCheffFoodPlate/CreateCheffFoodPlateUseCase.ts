import { CreateCheffFoodPlateUseCaseDTO } from "./CreateCheffFoodPlateUseCaseDTO";
import { FoodPlatesRepositoryDTO } from "../../repositories/FoodPlates/FoodPlatesRepositoryDTO";
import { CheffsRepositoryDTO } from "../../repositories/Users/Cheffs/CheffsRepositoryDTO";
import { NotFoundError } from "../../errors/NotFoundError";
import { CHEFF_NOT_FOUND } from "../../data/texts";

class CreateCheffFoodPlateUseCase
  implements CreateCheffFoodPlateUseCaseDTO.ICreateCheffFoodPlateUseCase
{
  constructor(
    private readonly cheffsRepository: CheffsRepositoryDTO.ICheffsRepository,
    private readonly foodPlatesRepository: FoodPlatesRepositoryDTO.IFoodPlatesRepository
  ) {}

  public async execute(
    data: CreateCheffFoodPlateUseCaseDTO.ExecuteDTO
  ): CreateCheffFoodPlateUseCaseDTO.ExecuteResponseDTO {
    const cheffExists = await this.cheffsRepository.findById({
      id: data.cheffId
    });

    if (!cheffExists) {
      throw new NotFoundError(CHEFF_NOT_FOUND);
    }

    await this.foodPlatesRepository.create(data);
  }
}

export { CreateCheffFoodPlateUseCase };
