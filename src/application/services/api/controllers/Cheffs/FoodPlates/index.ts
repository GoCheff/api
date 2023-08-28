import { CheffFoodPlatesController } from "./CheffFoodPlatesController";
import { createCheffFoodPlateUseCase } from "../../../../../../useCases/CreateCheffFoodPlate";
import { getCheffUseCase } from "../../../../../../useCases/GetCheff";

const cheffFoodPlatesController = new CheffFoodPlatesController(
  getCheffUseCase,
  createCheffFoodPlateUseCase
);

export { cheffFoodPlatesController };
