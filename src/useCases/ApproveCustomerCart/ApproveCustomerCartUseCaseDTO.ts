import { Cart } from "../../entities";

namespace ApproveCustomerCartUseCaseDTO {
  export interface IApproveCustomerCartUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    cartId: number;
  };

  export type ExecuteResponseDTO = Promise<Cart>;
}

export { ApproveCustomerCartUseCaseDTO };
