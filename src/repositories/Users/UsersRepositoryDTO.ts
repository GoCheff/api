import { User } from "../../entities";

namespace UsersRepositoryDTO {
  export interface IUsersRepository {
    findById(data: FindByIdDTO): FindByIdResponseDTO;

    findByEmail(data: FindByEmailDTO): FindByEmailResponseDTO;

    create(data: CreateDTO): CreateResponseDTO;
  }

  export type FindByIdDTO = {
    id: number;
  };

  export type FindByIdResponseDTO = Promise<User | null>;

  export type FindByEmailDTO = {
    email: string;
  };

  export type FindByEmailResponseDTO = Promise<User | null>;

  export type CreateDTO = {
    name: string;
    email: string;
    password: string;
    gender: "female" | "male" | "other" | "preferNotToSay";
  };

  export type CreateResponseDTO = Promise<User>;
}

export { UsersRepositoryDTO };
