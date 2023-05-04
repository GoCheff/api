import { CreateCustomerUseCase } from "./CreateCustomerUseCase";
import { usersRepository } from "../../repositories";

const createCustomerUseCase = new CreateCustomerUseCase(
  usersRepository.customers
);

export { createCustomerUseCase };
