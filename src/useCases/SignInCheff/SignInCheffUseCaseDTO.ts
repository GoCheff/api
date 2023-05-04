import { Cheff } from "../../entities";
import { TokenProviderDTO } from "../../providers";

namespace SignInCheffUseCaseDTO {
  export interface ISignInCheffUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    email: string;
    password: string;
  };

  export type ExecuteResponseDTO = Promise<{
    user: Cheff;
    token: TokenProviderDTO.IToken;
  }>;
}

export { SignInCheffUseCaseDTO };
