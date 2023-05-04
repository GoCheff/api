import { IsAuthenticatedMiddleware } from "./IsAuthenticatedMiddleware";
import { adminRepository } from "../../repositories";
import { tokenProvider } from "../../providers";

const isAuthenticatedAdminMiddleware = new IsAuthenticatedMiddleware(
  adminRepository,
  tokenProvider.admin
);

const isAuthenticatedMiddleware = {
  admin: isAuthenticatedAdminMiddleware
};

export { isAuthenticatedMiddleware };
