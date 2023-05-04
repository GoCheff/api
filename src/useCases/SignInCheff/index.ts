import { cheffsRepository } from "../../repositories";
import { cryptProvider, tokenProvider } from "../../providers";
import { SignInCheffUseCase } from "./SignInCheffUseCase";

const signInCheffUseCase = new SignInCheffUseCase(
  cheffsRepository,
  cryptProvider,
  tokenProvider.cheff
);

export { signInCheffUseCase };
