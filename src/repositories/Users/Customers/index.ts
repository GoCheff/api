import { CustomersRepository } from "./CustomersRepository";
import { database } from "../../../application/services";

const customersRepository = new CustomersRepository(database);

export { customersRepository };
