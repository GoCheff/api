import { Cart } from "../../entities";

namespace CancelCartToCheffUseCaseDTO {
  export interface ICancelCartToCheffUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    cartId: number;
  };

  export type ExecuteResponseDTO = Promise<Cart>;
}

export { CancelCartToCheffUseCaseDTO };
