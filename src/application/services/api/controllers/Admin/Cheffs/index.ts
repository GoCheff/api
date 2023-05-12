import { AdminCheffsController } from "./AdminCheffsController";
import { getAllPendingCheffsUseCase } from "../../../../../../useCases/GetAllPendingCheffs";
import { confirmRegistrationForCheffUseCase } from "../../../../../../useCases/ConfirmResgistrationForCheff";

const adminCheffsController = new AdminCheffsController(
  getAllPendingCheffsUseCase,
  confirmRegistrationForCheffUseCase
);

export { adminCheffsController };
