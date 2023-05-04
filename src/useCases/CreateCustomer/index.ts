import { customersRepository } from "../../repositories";
import { cryptProvider } from "../../providers";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

const createCustomerUseCase = new CreateCustomerUseCase(
  customersRepository,
  cryptProvider
);

export { createCustomerUseCase };
