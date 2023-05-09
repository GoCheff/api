import { CustomersController } from "./CustomersController";
import { signInCustomerUseCase } from "../../../../../useCases/SignInCustomer";
import { createCustomerUseCase } from "../../../../../useCases/CreateCustomer";
import { customerCheffsController } from "./Cheffs";

const customersController = new CustomersController(
  createCustomerUseCase,
  signInCustomerUseCase
);

export { customersController, customerCheffsController };
