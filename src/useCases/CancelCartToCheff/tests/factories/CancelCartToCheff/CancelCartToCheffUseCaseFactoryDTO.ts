import { CancelCartToCheffUseCaseDTO } from "../../../CancelCartToCheffUseCaseDTO";

namespace CancelCartToCheffUseCaseFactoryDTO {
  export interface ICancelCartToCheffUseCaseFactory {
    getExecuteData(): CancelCartToCheffUseCaseDTO.ExecuteDTO;

    getExecuteResponseData(): CancelCartToCheffUseCaseDTO.ExecuteResponseDTO;
  }
}

export { CancelCartToCheffUseCaseFactoryDTO };
