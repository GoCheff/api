import { Cheff } from "../../entities";

namespace GetAllCheffsUseCaseDTO {
  export interface IGetAllCheffsUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
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
  };

  export type ExecuteResponseDTO = Promise<Cheff[]>;
}

export { GetAllCheffsUseCaseDTO };
