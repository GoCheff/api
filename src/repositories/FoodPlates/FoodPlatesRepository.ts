import { FoodPlatesRepositoryDTO } from "./FoodPlatesRepositoryDTO";
import { DatabaseDTO } from "../../application/services/database/Database/DatabaseDTO";

class FoodPlatesRepository
  implements FoodPlatesRepositoryDTO.IFoodPlatesRepository
{
  private readonly foodPlates = this.database.db.foodPlate;

  constructor(private database: DatabaseDTO.IDatabase) {}

  public async create(
    data: FoodPlatesRepositoryDTO.CreateDTO
  ): FoodPlatesRepositoryDTO.CreateResponseDTO {
    return this.foodPlates.create({
      data
    });
  }
}

export { FoodPlatesRepository };
