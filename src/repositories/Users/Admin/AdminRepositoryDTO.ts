import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { Admin } from "../../../entities";

namespace AdminRepositoryDTO {
  export interface IAdminRepository
    extends UsersRepositoryDTO.IUsersRepository {
    findById(data: UsersRepositoryDTO.FindByIdDTO): FindByIdResponseDTO;

    findByEmail(
      data: UsersRepositoryDTO.FindByEmailDTO
    ): FindByEmailResponseDTO;

    create(data: UsersRepositoryDTO.CreateDTO): CreateResponseDTO;
  }

  export type FindByIdResponseDTO = Promise<Admin | null>;

  export type FindByEmailResponseDTO = Promise<Admin | null>;

  export type CreateResponseDTO = Promise<Admin>;
}

export { AdminRepositoryDTO };
