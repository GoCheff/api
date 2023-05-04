import { SignInAdminUseCaseDTO } from "../../../SignInAdminUseCaseDTO";

namespace SignInAdminUseCaseFactoryDTO {
  export interface ISignInAdminUseCaseFactory {
    getExecuteData(): SignInAdminUseCaseDTO.ExecuteDTO;

    getExecuteResponseData(): SignInAdminUseCaseDTO.ExecuteResponseDTO;
  }
}

export { SignInAdminUseCaseFactoryDTO };
