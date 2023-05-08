import { RequestRegistrationForCheffUseCaseDTO } from "../../RequestRegistrationForCheffUseCaseDTO";

namespace RequestRegistrationForCheffUseCaseFactoryDTO {
  export interface IRequestRegistrationForCheffUseCaseFactory {
    getExecuteData(): RequestRegistrationForCheffUseCaseDTO.ExecuteDTO;
  }
}

export { RequestRegistrationForCheffUseCaseFactoryDTO };
