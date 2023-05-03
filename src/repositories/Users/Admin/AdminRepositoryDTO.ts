import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { Admin } from "../../../entities";

namespace AdminRepositoryDTO {
  export interface IAdminRepository
    extends UsersRepositoryDTO.IUsersRepository {
    findById(data: UsersRepositoryDTO.FindByIdDTO): FindByIdResponseDTO;
  }

  export type FindByIdResponseDTO = Promise<Admin | null>;
}

export { AdminRepositoryDTO };
