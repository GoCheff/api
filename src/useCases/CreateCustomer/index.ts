import { CreateCustomerUseCase } from "./CreateCustomerUseCase";
import { usersRepository } from "../../repositories";
import { cryptProvider } from "../../providers/Crypt";

const createCustomerUseCase = new CreateCustomerUseCase(
  usersRepository.customers,
  cryptProvider
);

export { createCustomerUseCase };
