import { faker } from "@faker-js/faker/locale/pt_BR";
import { RequestRegistrationForCheffUseCaseFactoryDTO } from "./RequestRegistrationForCheffUseCaseFactoryDTO";
import { RequestRegistrationForCheffUseCaseDTO } from "../../RequestRegistrationForCheffUseCaseDTO";

class RequestRegistrationForCheffUseCaseFactory
  implements
    RequestRegistrationForCheffUseCaseFactoryDTO.IRequestRegistrationForCheffUseCaseFactory
{
  public getExecuteData(): RequestRegistrationForCheffUseCaseDTO.ExecuteDTO {
    return {
      email: faker.internet.email(),
      password: faker.internet.password(),
      registerReason: faker.lorem.paragraph()
    };
  }
}

export { RequestRegistrationForCheffUseCaseFactory };
