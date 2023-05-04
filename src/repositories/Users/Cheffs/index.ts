import { database } from "../../../application/services";
import { CheffsRepository } from "./CheffsRepository";

const cheffsRepository = new CheffsRepository(database);

export { cheffsRepository };
