import { AdminRepositoryDTO } from "./AdminRepositoryDTO";
import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { DatabaseDTO } from "../../../application/services/database/Database/DatabaseDTO";

class AdminRepository implements AdminRepositoryDTO.IAdminRepository {
  private readonly admin = this.database.db.admin;

  constructor(private database: DatabaseDTO.IDatabase) {}

  public async findById({
    id
  }: UsersRepositoryDTO.FindByIdDTO): AdminRepositoryDTO.FindByIdResponseDTO {
    return (
      this.admin.findFirst({
        where: {
          id,
          deletedAt: null
        }
      }) || null
    );
  }

  public async findByEmail({
    email
  }: UsersRepositoryDTO.FindByEmailDTO): AdminRepositoryDTO.FindByEmailResponseDTO {
    return (
      this.admin.findFirst({
        where: {
          email,
          deletedAt: null
        }
      }) || null
    );
  }

  public async create(
    data: UsersRepositoryDTO.CreateDTO
  ): AdminRepositoryDTO.CreateResponseDTO {
    return this.admin.create({
      data
    });
  }
}

export { AdminRepository };
