import { ApproveCustomerCartUseCaseDTO } from "../../../ApproveCustomerCartUseCaseDTO";

namespace ApproveCustomerCartUseCaseFactoryDTO {
  export interface IApproveCustomerCartUseCaseFactory {
    getExecuteData(): ApproveCustomerCartUseCaseDTO.ExecuteDTO;

    getExecuteResponseData(): ApproveCustomerCartUseCaseDTO.ExecuteResponseDTO;
  }
}

export { ApproveCustomerCartUseCaseFactoryDTO };
