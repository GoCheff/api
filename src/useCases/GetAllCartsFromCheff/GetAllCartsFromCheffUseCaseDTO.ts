import { Cart } from "../../entities";

namespace GetAllCartsFromCheffUseCaseDTO {
  export interface IGetAllCartsFromCheffUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    cheffId: number;
  };

  export type ExecuteResponseDTO = Promise<Cart[]>;
}

export { GetAllCartsFromCheffUseCaseDTO };
