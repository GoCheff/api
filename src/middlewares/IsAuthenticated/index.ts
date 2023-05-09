import { IsAuthenticatedMiddleware } from "./IsAuthenticatedMiddleware";
import { adminRepository } from "../../repositories";
import { tokenProvider } from "../../providers";

const isAuthenticatedAdminMiddleware = new IsAuthenticatedMiddleware(
  adminRepository,
  tokenProvider.admin
);

const isAuthenticatedCheffMiddleware = new IsAuthenticatedMiddleware(
  adminRepository,
  tokenProvider.cheff
);

const isAuthenticatedCustomerMiddleware = new IsAuthenticatedMiddleware(
  adminRepository,
  tokenProvider.customer
);

const isAuthenticatedMiddleware = {
  admin: isAuthenticatedAdminMiddleware,
  cheff: isAuthenticatedCheffMiddleware,
  customer: isAuthenticatedCustomerMiddleware
};

export { isAuthenticatedMiddleware };
