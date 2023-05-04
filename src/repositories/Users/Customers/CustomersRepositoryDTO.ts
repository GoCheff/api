import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { Customer } from "../../../entities";

namespace CustomersRepositoryDTO {
  export interface ICustomersRepository
    extends UsersRepositoryDTO.IUsersRepository {
    findById(data: UsersRepositoryDTO.FindByIdDTO): FindByIdResponseDTO;

    create(data: UsersRepositoryDTO.CreateDTO): CreateResponseDTO;
  }

  export type FindByIdResponseDTO = Promise<Customer | null>;

  export type CreateResponseDTO = Promise<Customer>;
}

export { CustomersRepositoryDTO };
