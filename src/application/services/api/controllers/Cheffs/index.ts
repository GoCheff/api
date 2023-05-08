import { CheffsController } from "./CheffsController";
import { signInCheffUseCase } from "../../../../../useCases/SignInCheff";
import { requestRegistrationForCheffUseCase } from "../../../../../useCases/RequestRegistrationForCheff";

const cheffsController = new CheffsController(
  requestRegistrationForCheffUseCase,
  signInCheffUseCase
);

export { cheffsController };
