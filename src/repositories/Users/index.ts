import { customersRepository } from "./Customers";
import { adminRepository } from "./Admin";

const usersRepository = {
  admin: adminRepository,
  customers: customersRepository
};

export { usersRepository };
