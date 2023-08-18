import { RefuseRegistrationForCheffUseCaseDTO } from "../../../RefuseRegistrationForCheffUseCaseDTO";

namespace RefuseRegistrationForCheffUseCaseFactoryDTO {
  export interface IRefuseRegistrationForCheffUseCaseFactory {
    getExecuteData(): RefuseRegistrationForCheffUseCaseDTO.ExecuteDTO;
  }
}

export { RefuseRegistrationForCheffUseCaseFactoryDTO };
