import { AdminCheffsController } from "./AdminCheffsController";
import { getAllPendingCheffsUseCase } from "../../../../../../useCases/GetAllPendingCheffs";

const adminCheffsController = new AdminCheffsController(
  getAllPendingCheffsUseCase
);

export { adminCheffsController };
