import { adminRepository } from "../../repositories";
import { cryptProvider, tokenProvider } from "../../providers";
import { SignInAdminUseCase } from "./SignInAdminUseCase";

const signInAdminUseCase = new SignInAdminUseCase(
  adminRepository,
  cryptProvider,
  tokenProvider.admin
);

export { signInAdminUseCase };
