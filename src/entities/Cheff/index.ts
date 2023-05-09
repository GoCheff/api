import { Cheff as _Cheff } from "@prisma/client";
import { FoodPlate } from "../FoodPlate";

type Cheff = _Cheff & {
  foodPlates?: FoodPlate[];
};

export { Cheff };
