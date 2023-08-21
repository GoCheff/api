import { Cart } from "../../entities";

namespace GetAllCartsFromCustomerUseCaseDTO {
  export interface IGetAllCartsFromCustomerUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    customerId: number;
  };

  export type ExecuteResponseDTO = Promise<Cart[]>;
}

export { GetAllCartsFromCustomerUseCaseDTO };
