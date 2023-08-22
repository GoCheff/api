import { CustomerCheffsController } from "./CustomerCheffsController";
import { getCheffUseCase } from "../../../../../../useCases/GetCheff";
import { getAllCheffsUseCase } from "../../../../../../useCases/GetAllCheffs";

const customerCheffsController = new CustomerCheffsController(
  getCheffUseCase,
  getAllCheffsUseCase
);

export { customerCheffsController };
