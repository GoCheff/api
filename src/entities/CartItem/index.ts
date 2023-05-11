import { CartItem as _CartItem } from "@prisma/client";
import { Cart } from "../Cart";
import { FoodPlate } from "../FoodPlate";

type CartItem = _CartItem & {
  cart?: Cart;
  foodPlate?: FoodPlate;
};

type CartItemIndludeRelations = {
  cart?: boolean;
  foodPlate?: boolean;
};

export { CartItem, CartItemIndludeRelations };
