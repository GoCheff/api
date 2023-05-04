import { CheffsController } from "./CheffsController";
import { signInCheffUseCase } from "../../../../../useCases/SignInCheff";

const cheffsController = new CheffsController(signInCheffUseCase);

export { cheffsController };
