import { ConfirmRegistrationForCheffUseCase } from "./ConfirmRegistrationForCheffUseCase";
import { cheffsRepository } from "../../repositories";

const confirmRegistrationForCheffUseCase =
  new ConfirmRegistrationForCheffUseCase(cheffsRepository);

export { confirmRegistrationForCheffUseCase };
