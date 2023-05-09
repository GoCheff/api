import { CheffsRepositoryDTO } from "./CheffsRepositoryDTO";
import { DatabaseDTO } from "../../../application/services/database/Database/DatabaseDTO";

class CheffsRepository implements CheffsRepositoryDTO.ICheffsRepository {
  private readonly cheffs = this.database.db.cheff;

  constructor(private database: DatabaseDTO.IDatabase) {}

  public async findById({
    id,
    include = {}
  }: CheffsRepositoryDTO.FindByIdDTO): CheffsRepositoryDTO.FindByIdResponseDTO {
    return (
      this.cheffs.findFirst({
        include,
        where: {
          id,
          deletedAt: null
        }
      }) || null
    );
  }

  public async findByEmail({
    email,
    include = {}
  }: CheffsRepositoryDTO.FindByEmailDTO): CheffsRepositoryDTO.FindByEmailResponseDTO {
    return (
      this.cheffs.findFirst({
        include,
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
