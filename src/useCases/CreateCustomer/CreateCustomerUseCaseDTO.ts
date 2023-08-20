import { Customer } from "../../entities";

namespace CreateCustomerUseCaseDTO {
  export interface ICreateCustomerUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    name: string;
    email: string;
    password: string;
    gender: "female" | "male" | "other" | "preferNotToSay";
  };

  export type ExecuteResponseDTO = Promise<Customer>;
}

export { CreateCustomerUseCaseDTO };
