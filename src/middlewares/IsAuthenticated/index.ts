import { IsAuthenticatedMiddleware } from "./IsAuthenticatedMiddleware";
import { usersRepository } from "../../repositories";
import { tokenProvider } from "../../providers";

const isAuthenticatedAdminMiddleware = new IsAuthenticatedMiddleware(
  usersRepository.admin,
  tokenProvider.admin
);

const isAuthenticatedMiddleware = {
  admin: isAuthenticatedAdminMiddleware
};

export { isAuthenticatedMiddleware };
