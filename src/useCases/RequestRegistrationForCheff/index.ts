import { RequestRegistrationForCheffUseCase } from "./RequestRegistrationForCheffUseCase";
import { cheffsRepository } from "../../repositories";

const requestRegistrationForCheffUseCase =
  new RequestRegistrationForCheffUseCase(cheffsRepository);

export { requestRegistrationForCheffUseCase };
