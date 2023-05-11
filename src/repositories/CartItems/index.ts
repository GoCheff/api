import { CartItemsRepository } from "./CartItemsRepository";
import { database } from "../../application/services";

const cartItemsRepository = new CartItemsRepository(database);

export { cartItemsRepository };
