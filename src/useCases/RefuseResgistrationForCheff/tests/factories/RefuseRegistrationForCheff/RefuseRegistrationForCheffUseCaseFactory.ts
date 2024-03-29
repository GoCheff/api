import { RefuseRegistrationForCheffUseCaseFactoryDTO } from "./RefuseRegistrationForCheffUseCaseFactoryDTO";
import { RefuseRegistrationForCheffUseCaseDTO } from "../../../RefuseRegistrationForCheffUseCaseDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class RefuseRegistrationForCheffUseCaseFactory
  implements
    RefuseRegistrationForCheffUseCaseFactoryDTO.IRefuseRegistrationForCheffUseCaseFactory
{
  public getExecuteData(): RefuseRegistrationForCheffUseCaseDTO.ExecuteDTO {
    return {
      id: faker.datatype.number()
    };
  }
}

export { RefuseRegistrationForCheffUseCaseFactory };
