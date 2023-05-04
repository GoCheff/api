import { database } from "../../../application/services";
import { AdminRepository } from "./AdminRepository";

const adminRepository = new AdminRepository(database);

export { adminRepository };
