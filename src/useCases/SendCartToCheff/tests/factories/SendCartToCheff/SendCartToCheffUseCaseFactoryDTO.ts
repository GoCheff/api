import { SendCartToCheffUseCaseDTO } from "../../../SendCartToCheffUseCaseDTO";

namespace SendCartToCheffUseCaseFactoryDTO {
  export interface ISendCartToCheffUseCaseFactory {
    getExecuteData(): SendCartToCheffUseCaseDTO.ExecuteDTO;

    getExecuteResponseData(): SendCartToCheffUseCaseDTO.ExecuteResponseDTO;
  }
}

export { SendCartToCheffUseCaseFactoryDTO };
