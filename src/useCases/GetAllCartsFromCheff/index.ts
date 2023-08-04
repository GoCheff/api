import { GetAllCartsFromCheffUseCase } from "./GetAllCartsFromCheffUseCase";
import { cartsRepository } from "../../repositories/Carts";

const getAllCartsFromCheffUseCase = new GetAllCartsFromCheffUseCase(
  cartsRepository
);

export { getAllCartsFromCheffUseCase };
