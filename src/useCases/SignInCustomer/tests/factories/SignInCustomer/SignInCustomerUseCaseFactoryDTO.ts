import { SignInCustomerUseCaseDTO } from "../../../SignInCustomerUseCaseDTO";

namespace SignInCustomerUseCaseFactoryDTO {
  export interface ISignInCustomerUseCaseFactory {
    getExecuteData(): SignInCustomerUseCaseDTO.ExecuteDTO;

    getExecuteResponseData(): SignInCustomerUseCaseDTO.ExecuteResponseDTO;
  }
}

export { SignInCustomerUseCaseFactoryDTO };
