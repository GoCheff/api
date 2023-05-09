import { CreateCheffFoodPlateUseCase } from "./CreateCheffFoodPlateUseCase";
import { foodPlatesRepository } from "../../repositories/FoodPlates";
import { cheffsRepository } from "../../repositories";

const createCheffFoodPlateUseCase = new CreateCheffFoodPlateUseCase(
  cheffsRepository,
  foodPlatesRepository
);

export { createCheffFoodPlateUseCase };
