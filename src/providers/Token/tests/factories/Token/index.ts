import { TokenProviderFactory } from "./TokenProviderFactory";
import { environment } from "../../../../../application/environment";

const { JWT_SECRET_ADMIN, JWT_SECRET_CHEF, JWT_SECRET_CUSTOMER } = environment;

const tokenAdminProvider = new TokenProviderFactory(JWT_SECRET_ADMIN);
const tokenChefProvider = new TokenProviderFactory(JWT_SECRET_CHEF);
const tokenCustomerProvider = new TokenProviderFactory(JWT_SECRET_CUSTOMER);

const tokenProviderFactory = {
  admin: tokenAdminProvider,
  chef: tokenChefProvider,
  customer: tokenCustomerProvider
};

export { tokenProviderFactory };
