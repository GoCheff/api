import { FoodPlate as _FoodPlate } from "@prisma/client";
import { Cheff } from "../Cheff";
import { CartItem } from "../CartItem";

type FoodPlate = _FoodPlate & {
  cheff?: Cheff;
  cartItems?: CartItem[];
};

type FoodPlateIncludeRelations = {
  cheff?: boolean;
  cartItems?: boolean;
};

export { FoodPlate, FoodPlateIncludeRelations };
