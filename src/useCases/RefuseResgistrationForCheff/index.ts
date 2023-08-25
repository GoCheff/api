import { RefuseRegistrationForCheffUseCase } from "./RefuseRegistrationForCheffUseCase";
import { cheffsRepository } from "../../repositories";

const refuseRegistrationForCheffUseCase = new RefuseRegistrationForCheffUseCase(
  cheffsRepository
);

export { refuseRegistrationForCheffUseCase };
