import { GetAllSentCartsFromCheffUseCase } from "./GetAllSentCartsFromCheffUseCase";
import { cartsRepository } from "../../repositories/Carts";

const getAllSentCartsFromCheffUseCase = new GetAllSentCartsFromCheffUseCase(
  cartsRepository
);

export { getAllSentCartsFromCheffUseCase };
