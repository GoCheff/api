import { database } from "../../../application/services";
import { CustomersRepository } from "./CustomersRepository";

const customersRepository = new CustomersRepository(database);

export { customersRepository };
