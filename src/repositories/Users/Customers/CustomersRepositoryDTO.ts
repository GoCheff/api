import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { Customer } from "../../../entities";

namespace CustomersRepositoryDTO {
  export interface ICustomersRepository
    extends UsersRepositoryDTO.IUsersRepository {
    findById(data: UsersRepositoryDTO.FindByIdDTO): FindByIdResponseDTO;

    findByEmail(
      data: UsersRepositoryDTO.FindByEmailDTO
    ): FindByEmailResponseDTO;

    create(data: UsersRepositoryDTO.CreateDTO): CreateResponseDTO;
  }

  export type FindByIdResponseDTO = Promise<Customer | null>;

  export type FindByEmailResponseDTO = Promise<Customer | null>;

  export type CreateResponseDTO = Promise<Customer>;
}

export { CustomersRepositoryDTO };
