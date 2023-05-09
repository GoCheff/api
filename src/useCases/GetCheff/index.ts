import { GetCheffUseCase } from "./GetCheffUseCase";
import { cheffsRepository } from "../../repositories";

const getCheffUseCase = new GetCheffUseCase(cheffsRepository);

export { getCheffUseCase };
