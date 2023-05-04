import { signInAdminUseCase } from "../../../../../useCases/SignInAdmin";
import { AdminController } from "./AdminController";

const adminController = new AdminController(signInAdminUseCase);

export { adminController };
