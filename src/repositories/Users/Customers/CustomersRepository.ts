import { CustomersRepositoryDTO } from "./CustomersRepositoryDTO";
import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { DatabaseDTO } from "../../../application/services/database/Database/DatabaseDTO";
import IDatabase = DatabaseDTO.IDatabase;

class CustomersRepository
  implements CustomersRepositoryDTO.ICustomersRepository
{
  private readonly customers = this.database.db.customer;

  constructor(private database: IDatabase) {}

  public async findById({
    id
  }: UsersRepositoryDTO.FindByIdDTO): CustomersRepositoryDTO.FindByIdResponseDTO {
    return this.customers.findFirst({
      where: {
        id
      }
    });
  }

  public async create({
    email,
    password
  }: UsersRepositoryDTO.CreateDTO): CustomersRepositoryDTO.CreateResponseDTO {
    return this.customers.create({
      data: {
        email,
        password
      }
    });
  }
}

export { CustomersRepository };
