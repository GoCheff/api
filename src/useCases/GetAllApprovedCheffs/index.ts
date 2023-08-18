import { GetAllApprovedCheffsUseCase } from "./GetAllApprovedCheffsUseCase";
import { cheffsRepository } from "../../repositories";

const getAllApprovedCheffsUseCase = new GetAllApprovedCheffsUseCase(
  cheffsRepository
);

export { getAllApprovedCheffsUseCase };
