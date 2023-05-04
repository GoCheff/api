import { Admin } from "../../entities";
import { TokenProviderDTO } from "../../providers";

namespace SignInAdminUseCaseDTO {
  export interface ISignInAdminUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    email: string;
    password: string;
  };

  export type ExecuteResponseDTO = Promise<{
    user: Admin;
    token: TokenProviderDTO.IToken;
  }>;
}

export { SignInAdminUseCaseDTO };
