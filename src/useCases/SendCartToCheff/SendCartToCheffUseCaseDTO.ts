import { Cart } from "../../entities";

namespace SendCartToCheffUseCaseDTO {
  export interface ISendCartToCheffUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    cartId: number;
  };

  export type ExecuteResponseDTO = Promise<Cart>;
}

export { SendCartToCheffUseCaseDTO };
