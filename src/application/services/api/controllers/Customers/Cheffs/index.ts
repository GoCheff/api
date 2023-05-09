import { CustomerCheffsController } from "./CustomerCheffsController";
import { getCheffUseCase } from "../../../../../../useCases/GetCheff";

const customerCheffsController = new CustomerCheffsController(getCheffUseCase);

export { customerCheffsController };
