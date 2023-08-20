import { RefuseCustomerCartUseCaseDTO } from "../../../RefuseCustomerCartUseCaseDTO";

namespace RefuseCustomerCartUseCaseFactoryDTO {
  export interface IRefuseCustomerCartUseCaseFactory {
    getExecuteData(): RefuseCustomerCartUseCaseDTO.ExecuteDTO;

    getExecuteResponseData(): RefuseCustomerCartUseCaseDTO.ExecuteResponseDTO;
  }
}

export { RefuseCustomerCartUseCaseFactoryDTO };
