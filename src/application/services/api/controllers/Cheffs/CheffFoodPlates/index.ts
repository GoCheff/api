import { CheffFoodPlatesController } from "./CheffFoodPlatesController";
import { createCheffFoodPlateUseCase } from "../../../../../../useCases/CreateCheffFoodPlate";

const cheffFoodPlatesController = new CheffFoodPlatesController(
  createCheffFoodPlateUseCase
);

export { cheffFoodPlatesController };
