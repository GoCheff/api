import { AdminCheffsController } from "./AdminCheffsController";
import { getAllPendingCheffsUseCase } from "../../../../../../useCases/GetAllPendingCheffs";
import { confirmRegistrationForCheffUseCase } from "../../../../../../useCases/ConfirmResgistrationForCheff";
import { refuseRegistrationForCheffUseCase } from "../../../../../../useCases/RefuseResgistrationForCheff";
import { getAllApprovedCheffsUseCase } from "../../../../../../useCases/GetAllApprovedCheffs";

const adminCheffsController = new AdminCheffsController(
  getAllPendingCheffsUseCase,
  confirmRegistrationForCheffUseCase,
  refuseRegistrationForCheffUseCase,
  getAllApprovedCheffsUseCase
);

export { adminCheffsController };
