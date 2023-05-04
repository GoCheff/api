import { AdminRepositoryDTO } from "./AdminRepositoryDTO";
import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { DatabaseDTO } from "../../../application/services/database/Database/DatabaseDTO";
import IDatabase = DatabaseDTO.IDatabase;

class AdminRepository implements AdminRepositoryDTO.IAdminRepository {
  private readonly admin = this.database.db.admin;

  constructor(private database: IDatabase) {}

  public async findById({
    id
  }: UsersRepositoryDTO.FindByIdDTO): AdminRepositoryDTO.FindByIdResponseDTO {
    return (
      this.admin.findFirst({
        where: {
          id
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
          email
        }
      }) || null
    );
  }

  public async create({
    email,
    password
  }: UsersRepositoryDTO.CreateDTO): AdminRepositoryDTO.CreateResponseDTO {
    return this.admin.create({
      data: {
        email,
        password
      }
    });
  }
}

export { AdminRepository };
