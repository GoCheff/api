import { CustomerCartItemsController } from "./CustomerCartItemsController";
import { addCheffFoodPlateToCartUseCase } from "../../../../../../useCases/AddCheffFoodPlateToCart";

const customerCartItemsController = new CustomerCartItemsController(
  addCheffFoodPlateToCartUseCase
);

export { customerCartItemsController };
