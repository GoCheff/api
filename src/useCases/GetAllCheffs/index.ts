import { GetAllCheffsUseCase } from "./GetAllCheffsUseCase";
import { cheffsRepository } from "../../repositories";

const getAllCheffsUseCase = new GetAllCheffsUseCase(cheffsRepository);

export { getAllCheffsUseCase };
