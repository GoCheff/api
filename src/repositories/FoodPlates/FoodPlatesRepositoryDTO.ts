import { FoodPlate } from "../../entities";

namespace FoodPlatesRepositoryDTO {
  export interface IFoodPlatesRepository {
    create(data: CreateDTO): CreateResponseDTO;
  }

  export type CreateDTO = {
    cheffId: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    minServe: number;
    maxServe: number;
    cookTime: number;
  };

  export type CreateResponseDTO = Promise<FoodPlate>;
}

export { FoodPlatesRepositoryDTO };
