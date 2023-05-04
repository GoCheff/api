import { CustomersController } from "./CustomersController";
import { createCustomerUseCase } from "../../../../../useCases/CreateCustomer";
import { signInCustomerUseCase } from "../../../../../useCases/SignInCustomer";

const customersController = new CustomersController(
  createCustomerUseCase,
  signInCustomerUseCase
);

export { customersController };
