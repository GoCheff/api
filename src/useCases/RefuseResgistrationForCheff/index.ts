import { RefuseRegistrationForCheffUseCase } from "./RefuseRegistrationForCheffUseCase";
import { adminRepository, cheffsRepository } from "../../repositories";
import { cryptProvider } from "../../providers";

const refuseRegistrationForCheffUseCase = new RefuseRegistrationForCheffUseCase(
  adminRepository,
  cheffsRepository,
  cryptProvider
);

export { refuseRegistrationForCheffUseCase };
