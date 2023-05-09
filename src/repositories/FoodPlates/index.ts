import { FoodPlatesRepository } from "./FoodPlatesRepository";
import { database } from "../../application/services";

const foodPlatesRepository = new FoodPlatesRepository(database);

export { foodPlatesRepository };
