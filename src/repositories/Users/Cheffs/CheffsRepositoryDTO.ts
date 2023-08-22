import { UsersRepositoryDTO } from "../UsersRepositoryDTO";
import { Cheff, CheffIncludeRelations } from "../../../entities";

namespace CheffsRepositoryDTO {
  export interface ICheffsRepository
    extends UsersRepositoryDTO.IUsersRepository {
    findById(data: FindByIdDTO): FindByIdResponseDTO;

    findByEmail(data: FindByEmailDTO): FindByEmailResponseDTO;

    findByStatus(data: FindByStatusDTO): FindByStatusResponseDTO;

    findWithMultipleFilters(
      data: FindWithMultipleFiltersDTO
    ): FindWithMultipleFiltersResponseDTO;

    create(data: CreateDTO): CreateResponseDTO;

    updateStatus(data: UpdateStatusDTO): UpdateStatusResponseDTO;
  }

  export type FindByIdDTO = UsersRepositoryDTO.FindByIdDTO & {
    include?: CheffIncludeRelations;
  };

  export type FindByIdResponseDTO = Promise<Cheff | null>;

  export type FindByEmailDTO = UsersRepositoryDTO.FindByEmailDTO & {
    include?: CheffIncludeRelations;
  };

  export type FindByEmailResponseDTO = Promise<Cheff | null>;

  export type FindByStatusDTO = {
    registerStatus: "pending" | "approved" | "rejected";
  } & {
    include?: CheffIncludeRelations;
  };

  export type FindByStatusResponseDTO = Promise<Cheff[]>;

  export type FindWithMultipleFiltersDTO = {
    name?: string;
    mainCuisine?: string;
    city?: string;
    glutenFree?: boolean;
    lactoseFree?: boolean;
    vegan?: boolean;
    vegetarian?: boolean;
    light?: boolean;
    limit?: number;
    offset?: number;
  } & {
    include?: CheffIncludeRelations;
  };

  export type FindWithMultipleFiltersResponseDTO = Promise<Cheff[]>;

  export type CreateDTO = UsersRepositoryDTO.CreateDTO & {
    registerReason: string;
    mainCuisine: string;
    city: string;
  };

  export type CreateResponseDTO = Promise<Cheff>;

  export type UpdateStatusDTO = {
    id: number;
    registerStatus: "pending" | "approved" | "rejected";
  };

  export type UpdateStatusResponseDTO = Promise<void>;
}

export { CheffsRepositoryDTO };
