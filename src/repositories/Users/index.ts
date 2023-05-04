import { adminRepository } from "./Admin";
import { customersRepository } from "./Customers";

const usersRepository = {
  admin: adminRepository,
  customers: customersRepository
};

export { usersRepository };
