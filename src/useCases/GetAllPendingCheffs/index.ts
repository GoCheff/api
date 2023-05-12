import { GetAllPendingCheffsUseCase } from "./GetAllPendingCheffsUseCase";
import { cheffsRepository } from "../../repositories";

const getAllPendingCheffsUseCase = new GetAllPendingCheffsUseCase(
  cheffsRepository
);

export { getAllPendingCheffsUseCase };
