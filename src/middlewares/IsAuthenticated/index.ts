import { IsAuthenticatedMiddleware } from "./IsAuthenticatedMiddleware";
import {
  adminRepository,
  cheffsRepository,
  customersRepository
} from "../../repositories";
import { tokenProvider } from "../../providers";

const isAuthenticatedAdminMiddleware = new IsAuthenticatedMiddleware(
  adminRepository,
  tokenProvider.admin
);

const isAuthenticatedCheffMiddleware = new IsAuthenticatedMiddleware(
  cheffsRepository,
  tokenProvider.cheff
);

const isAuthenticatedCustomerMiddleware = new IsAuthenticatedMiddleware(
  customersRepository,
  tokenProvider.customer
);

const isAuthenticatedMiddleware = {
  admin: isAuthenticatedAdminMiddleware,
  cheff: isAuthenticatedCheffMiddleware,
  customer: isAuthenticatedCustomerMiddleware
};

export { isAuthenticatedMiddleware };
