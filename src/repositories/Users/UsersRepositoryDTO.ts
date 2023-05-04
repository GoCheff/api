import { User } from "../../entities";

namespace UsersRepositoryDTO {
  export interface IUsersRepository {
    findById(data: FindByIdDTO): FindByIdResponseDTO;

    create(data: CreateDTO): CreateResponseDTO;
  }

  export type FindByIdDTO = {
    id: number;
  };

  export type FindByIdResponseDTO = Promise<User | null>;

  export type CreateDTO = {
    email: string;
    password: string;
  };

  export type CreateResponseDTO = Promise<User>;
}

export { UsersRepositoryDTO };
