import { Cart } from "../../entities";

namespace GetAllSentCartsFromCheffUseCaseDTO {
  export interface IGetAllSentCartsFromCheffUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    cheffId: number;
  };

  export type ExecuteResponseDTO = Promise<Cart[]>;
}

export { GetAllSentCartsFromCheffUseCaseDTO };
