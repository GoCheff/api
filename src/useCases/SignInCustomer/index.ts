import { SignInCustomerUseCase } from "./SignInCustomerUseCase";
import { usersRepository } from "../../repositories";
import { cryptProvider } from "../../providers";
import { tokenProvider } from "../../providers";

const signInCustomerUseCase = new SignInCustomerUseCase(
  usersRepository.customers,
  cryptProvider,
  tokenProvider.customer
);

export { signInCustomerUseCase };
