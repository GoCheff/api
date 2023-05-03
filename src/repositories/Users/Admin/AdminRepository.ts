import { AdminRepositoryDTO } from "./AdminRepositoryDTO";
import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { DatabaseDTO } from "../../../application/services/database/Database/DatabaseDTO";
import IDatabase = DatabaseDTO.IDatabase;

class AdminRepository implements AdminRepositoryDTO.IAdminRepository {
  private readonly admin = this.database.db.admin;

  constructor(private database: IDatabase) {}

  findById({
    id
  }: UsersRepositoryDTO.FindByIdDTO): AdminRepositoryDTO.FindByIdResponseDTO {
    return this.admin.findFirst({
      where: {
        id
      }
    });
  }
}

export { AdminRepository };
