import { RequestRegistrationForCheffUseCase } from "./RequestRegistrationForCheffUseCase";
import { cheffsRepository } from "../../repositories";
import { cryptProvider } from "../../providers";

const requestRegistrationForCheffUseCase =
  new RequestRegistrationForCheffUseCase(cheffsRepository, cryptProvider);

export { requestRegistrationForCheffUseCase };
