import { FoodPlate } from "../../entities";

namespace FoodPlatesRepositoryDTO {
  export interface IFoodPlatesRepository {
    create(data: CreateDTO): CreateResponseDTO;

    findByIdAndCheffId(
      data: FindByIdAndCheffIdDTO
    ): FindByIdAndCheffIdResponseDTO;
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

  export type FindByIdAndCheffIdDTO = {
    id: number;
    cheffId: number;
  };

  export type FindByIdAndCheffIdResponseDTO = Promise<FoodPlate | null>;
}

export { FoodPlatesRepositoryDTO };
