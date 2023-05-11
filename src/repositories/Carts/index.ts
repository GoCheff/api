import { CartsRepository } from "./CartsRepository";
import { database } from "../../application/services";

const cartsRepository = new CartsRepository(database);

export { cartsRepository };
