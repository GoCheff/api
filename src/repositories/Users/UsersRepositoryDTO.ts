import { User } from "../../entities";

namespace UsersRepositoryDTO {
  export interface IUsersRepository {
    findById(data: FindByIdDTO): FindByIdResponseDTO;
  }

  export type FindByIdDTO = {
    id: number;
  };

  export type FindByIdResponseDTO = Promise<User | null>;
}

export { UsersRepositoryDTO };
