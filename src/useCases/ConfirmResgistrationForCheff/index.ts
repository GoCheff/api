import { ConfirmRegistrationForCheffUseCase } from "./ConfirmRegistrationForCheffUseCase";
import { adminRepository, cheffsRepository } from "../../repositories";
import { cryptProvider } from "../../providers";

const confirmRegistrationForCheffUseCase =
  new ConfirmRegistrationForCheffUseCase(
    adminRepository,
    cheffsRepository,
    cryptProvider
  );

export { confirmRegistrationForCheffUseCase };
