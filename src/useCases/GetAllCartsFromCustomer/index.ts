import { GetAllCartsFromCustomerUseCase } from "./GetAllCartsFromCustomerUseCase";
import { cartsRepository } from "../../repositories/Carts";

const getAllCartsFromCustomerUseCase = new GetAllCartsFromCustomerUseCase(
  cartsRepository
);

export { getAllCartsFromCustomerUseCase };
