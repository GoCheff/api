import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { Admin } from "../../../entities";

namespace AdminRepositoryDTO {
  export interface IAdminRepository
    extends UsersRepositoryDTO.IUsersRepository {
    findById(data: UsersRepositoryDTO.FindByIdDTO): FindByIdResponseDTO;

    create(data: UsersRepositoryDTO.CreateDTO): CreateResponseDTO;
  }

  export type FindByIdResponseDTO = Promise<Admin | null>;

  export type CreateResponseDTO = Promise<Admin>;
}

export { AdminRepositoryDTO };
