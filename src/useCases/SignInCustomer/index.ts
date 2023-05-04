import { SignInCustomerUseCase } from "./SignInCustomerUseCase";
import { customersRepository } from "../../repositories";
import { cryptProvider, tokenProvider } from "../../providers";

const signInCustomerUseCase = new SignInCustomerUseCase(
  customersRepository,
  cryptProvider,
  tokenProvider.customer
);

export { signInCustomerUseCase };
