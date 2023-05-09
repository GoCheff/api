import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { Cheff, CheffIncludeRelations } from "../../../entities";

namespace CheffsRepositoryDTO {
  export interface ICheffsRepository
    extends UsersRepositoryDTO.IUsersRepository {
    findById(data: FindByIdDTO): FindByIdResponseDTO;

    findByEmail(data: FindByEmailDTO): FindByEmailResponseDTO;

    create(data: CreateDTO): CreateResponseDTO;
  }

  export type FindByIdDTO = UsersRepositoryDTO.FindByIdDTO & {
    include?: CheffIncludeRelations;
  };

  export type FindByIdResponseDTO = Promise<Cheff | null>;

  export type FindByEmailDTO = UsersRepositoryDTO.FindByEmailDTO & {
    include?: CheffIncludeRelations;
  };

  export type FindByEmailResponseDTO = Promise<Cheff | null>;

  export type CreateDTO = UsersRepositoryDTO.CreateDTO & {
    registerReason: string;
  };

  export type CreateResponseDTO = Promise<Cheff>;
}

export { CheffsRepositoryDTO };
