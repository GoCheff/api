import { SignInCheffUseCaseDTO } from "../../../SignInCheffUseCaseDTO";

namespace SignInCheffUseCaseFactoryDTO {
  export interface ISignInCheffUseCaseFactory {
    getExecuteData(): SignInCheffUseCaseDTO.ExecuteDTO;

    getExecuteResponseData(): SignInCheffUseCaseDTO.ExecuteResponseDTO;
  }
}

export { SignInCheffUseCaseFactoryDTO };
