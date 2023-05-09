import { CheffsRepositoryDTO } from "./CheffsRepositoryDTO";
import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { DatabaseDTO } from "../../../application/services/database/Database/DatabaseDTO";

class CheffsRepository implements CheffsRepositoryDTO.ICheffsRepository {
  private readonly cheffs = this.database.db.cheff;

  constructor(private database: DatabaseDTO.IDatabase) {}

  public async findById({
    id
  }: UsersRepositoryDTO.FindByIdDTO): CheffsRepositoryDTO.FindByIdResponseDTO {
    return (
      this.cheffs.findFirst({
        where: {
          id,
          deletedAt: null
        }
      }) || null
    );
  }

  public async findByEmail({
    email
  }: UsersRepositoryDTO.FindByEmailDTO): CheffsRepositoryDTO.FindByEmailResponseDTO {
    return (
      this.cheffs.findFirst({
        where: {
          email,
          deletedAt: null
        }
      }) || null
    );
  }

  public async create(
    data: CheffsRepositoryDTO.CreateDTO
  ): CheffsRepositoryDTO.CreateResponseDTO {
    return this.cheffs.create({
      data
    });
  }
}

export { CheffsRepository };
