import { Customer } from "../../entities";
import { TokenProviderDTO } from "../../providers";

namespace SignInCustomerUseCaseDTO {
  export interface ISignInCustomerUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    email: string;
    password: string;
  };

  export type ExecuteResponseDTO = Promise<{
    user: Customer;
    token: TokenProviderDTO.IToken;
  }>;
}

export { SignInCustomerUseCaseDTO };
