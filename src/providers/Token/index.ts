import { environment } from "../../application/environment";
import { TokenProvider } from "./TokenProvider";

const { JWT_SECRET_ADMIN, JWT_SECRET_CHEF, JWT_SECRET_CUSTOMER } = environment;

const tokenAdminProvider = new TokenProvider(JWT_SECRET_ADMIN);
const tokenChefProvider = new TokenProvider(JWT_SECRET_CHEF);
const tokenCustomerProvider = new TokenProvider(JWT_SECRET_CUSTOMER);

const tokenProvider = {
  admin: tokenAdminProvider,
  chef: tokenChefProvider,
  customer: tokenCustomerProvider
};

export { tokenProvider };
