import { FoodPlate as _FoodPlate } from "@prisma/client";
import { Cheff } from "../Cheff";

type FoodPlate = _FoodPlate & {
  cheff?: Cheff;
};

type FoodPlateIncludeRelations = {
  cheff?: boolean;
};

export { FoodPlate, FoodPlateIncludeRelations };
