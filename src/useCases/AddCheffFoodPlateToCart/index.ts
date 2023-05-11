import { AddCheffFoodPlateToCartUseCase } from "./AddCheffFoodPlateToCartUseCase";
import { foodPlatesRepository } from "../../repositories/FoodPlates";
import { cartItemsRepository } from "../../repositories/CartItems";
import { cartsRepository } from "../../repositories/Carts";

const addCheffFoodPlateToCartUseCase = new AddCheffFoodPlateToCartUseCase(
  cartsRepository,
  foodPlatesRepository,
  cartItemsRepository
);

export { addCheffFoodPlateToCartUseCase };
