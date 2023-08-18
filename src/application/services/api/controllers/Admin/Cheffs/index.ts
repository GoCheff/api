import { AdminCheffsController } from "./AdminCheffsController";
import { getAllPendingCheffsUseCase } from "../../../../../../useCases/GetAllPendingCheffs";
import { confirmRegistrationForCheffUseCase } from "../../../../../../useCases/ConfirmResgistrationForCheff";
import { refuseRegistrationForCheffUseCase } from "../../../../../../useCases/RefuseResgistrationForCheff";

const adminCheffsController = new AdminCheffsController(
  getAllPendingCheffsUseCase,
  confirmRegistrationForCheffUseCase,
  refuseRegistrationForCheffUseCase
);

export { adminCheffsController };
