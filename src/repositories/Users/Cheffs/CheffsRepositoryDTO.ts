import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { Cheff } from "../../../entities";

namespace CheffsRepositoryDTO {
  export interface ICheffsRepository
    extends UsersRepositoryDTO.IUsersRepository {
    findById(data: UsersRepositoryDTO.FindByIdDTO): FindByIdResponseDTO;

    findByEmail(
      data: UsersRepositoryDTO.FindByEmailDTO
    ): FindByEmailResponseDTO;

    create(data: UsersRepositoryDTO.CreateDTO): CreateResponseDTO;
  }

  export type FindByIdResponseDTO = Promise<Cheff | null>;

  export type FindByEmailResponseDTO = Promise<Cheff | null>;

  export type CreateResponseDTO = Promise<Cheff>;
}

export { CheffsRepositoryDTO };
