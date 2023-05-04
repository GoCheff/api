import { CustomersRepositoryDTO } from "./CustomersRepositoryDTO";
import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { DatabaseDTO } from "../../../application/services/database/Database/DatabaseDTO";

class CustomersRepository
  implements CustomersRepositoryDTO.ICustomersRepository
{
  private readonly customers = this.database.db.customer;

  constructor(private database: DatabaseDTO.IDatabase) {}

  public async findById({
    id
  }: UsersRepositoryDTO.FindByIdDTO): CustomersRepositoryDTO.FindByIdResponseDTO {
    return (
      this.customers.findFirst({
        where: {
          id
        }
      }) || null
    );
  }

  public async findByEmail({
    email
  }: UsersRepositoryDTO.FindByEmailDTO): CustomersRepositoryDTO.FindByEmailResponseDTO {
    return (
      this.customers.findFirst({
        where: {
          email
        }
      }) || null
    );
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
