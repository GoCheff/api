import { Customer } from "../../entities";

namespace CreateCustomerUseCaseDTO {
  export interface ICreateCustomerUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    email: string;
    password: string;
  };

  export type ExecuteResponseDTO = Promise<Customer>;
}

export { CreateCustomerUseCaseDTO };
