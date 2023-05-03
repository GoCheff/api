import { AdminRepository } from "./AdminRepository";
import { database } from "../../../application/services";

const adminRepository = new AdminRepository(database);

export { adminRepository };
