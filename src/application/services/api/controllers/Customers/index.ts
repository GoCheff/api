import { CustomersController } from "./CustomersController";
import { signInCustomerUseCase } from "../../../../../useCases/SignInCustomer";
import { createCustomerUseCase } from "../../../../../useCases/CreateCustomer";

const customersController = new CustomersController(
  createCustomerUseCase,
  signInCustomerUseCase
);

export { customersController };
