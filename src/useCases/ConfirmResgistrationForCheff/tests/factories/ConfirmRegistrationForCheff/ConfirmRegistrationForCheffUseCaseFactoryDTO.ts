import { ConfirmRegistrationForCheffUseCaseDTO } from "../../../ConfirmRegistrationForCheffUseCaseDTO";

namespace ConfirmRegistrationForCheffUseCaseFactoryDTO {
  export interface IConfirmRegistrationForCheffUseCaseFactory {
    getExecuteData(): ConfirmRegistrationForCheffUseCaseDTO.ExecuteDTO;
  }
}

export { ConfirmRegistrationForCheffUseCaseFactoryDTO };
