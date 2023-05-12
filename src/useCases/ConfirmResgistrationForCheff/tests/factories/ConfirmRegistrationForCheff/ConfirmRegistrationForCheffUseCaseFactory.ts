import { ConfirmRegistrationForCheffUseCaseFactoryDTO } from "./ConfirmRegistrationForCheffUseCaseFactoryDTO";
import { ConfirmRegistrationForCheffUseCaseDTO } from "../../../ConfirmRegistrationForCheffUseCaseDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class ConfirmRegistrationForCheffUseCaseFactory
  implements
    ConfirmRegistrationForCheffUseCaseFactoryDTO.IConfirmRegistrationForCheffUseCaseFactory
{
  public getExecuteData(): ConfirmRegistrationForCheffUseCaseDTO.ExecuteDTO {
    return {
      id: faker.datatype.number(),
      adminEmail: faker.internet.email(),
      adminPassword: faker.internet.password()
    };
  }
}

export { ConfirmRegistrationForCheffUseCaseFactory };
