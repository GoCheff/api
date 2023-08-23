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
        ...(include && Object.entries(include).length && { include }),
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
        ...(include && Object.entries(include).length && { include }),
        where: {
          email,
          deletedAt: null
        }
      }) || null
    );
  }

  public async findByStatus({
    registerStatus,
    include = {}
  }: CheffsRepositoryDTO.FindByStatusDTO): CheffsRepositoryDTO.FindByStatusResponseDTO {
    return this.cheffs.findMany({
      ...(include && Object.entries(include).length && { include }),
      where: {
        registerStatus
      }
    });
  }

  public async findWithMultipleFilters({
    name,
    mainCuisine,
    city,
    glutenFree,
    lactoseFree,
    vegan,
    vegetarian,
    light,
    limit,
    offset,
    include = {}
  }: CheffsRepositoryDTO.FindWithMultipleFiltersDTO): CheffsRepositoryDTO.FindWithMultipleFiltersResponseDTO {
    return this.cheffs.findMany({
      ...(include && Object.entries(include).length && { include }),
      where: {
        AND: [
          {
            name: {
              contains: name
            }
          },
          {
            mainCuisine: {
              contains: mainCuisine
            }
          },
          {
            city: {
              contains: city
            }
          },
          {
            foodPlates: {
              some: {
                AND: [
                  ...(glutenFree !== undefined ? [{ glutenFree }] : []),
                  ...(lactoseFree !== undefined ? [{ lactoseFree }] : []),
                  ...(vegan !== undefined ? [{ vegan }] : []),
                  ...(vegetarian !== undefined ? [{ vegetarian }] : []),
                  ...(light !== undefined ? [{ light }] : [])
                ]
              }
            }
          }
        ]
      },
      take: limit,
      skip: offset
    });
  }

  public async create(
    data: CheffsRepositoryDTO.CreateDTO
  ): CheffsRepositoryDTO.CreateResponseDTO {
    return this.cheffs.create({
      data
    });
  }

  public async updateStatus({
    id,
    registerStatus
  }: CheffsRepositoryDTO.UpdateStatusDTO): CheffsRepositoryDTO.UpdateStatusResponseDTO {
    this.cheffs.update({
      where: {
        id
      },
      data: {
        registerStatus
      }
    });
  }
}

export { CheffsRepository };
