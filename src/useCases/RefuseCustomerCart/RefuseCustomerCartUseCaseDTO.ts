import { Cart } from "../../entities";

namespace RefuseCustomerCartUseCaseDTO {
  export interface IRefuseCustomerCartUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    cartId: number;
  };

  export type ExecuteResponseDTO = Promise<Cart>;
}

export { RefuseCustomerCartUseCaseDTO };
