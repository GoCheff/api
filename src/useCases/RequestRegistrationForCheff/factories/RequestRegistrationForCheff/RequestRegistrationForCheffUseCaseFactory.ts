import { faker } from "@faker-js/faker/locale/pt_BR";
import { RequestRegistrationForCheffUseCaseFactoryDTO } from "./RequestRegistrationForCheffUseCaseFactoryDTO";
import { RequestRegistrationForCheffUseCaseDTO } from "../../RequestRegistrationForCheffUseCaseDTO";

class RequestRegistrationForCheffUseCaseFactory
  implements
    RequestRegistrationForCheffUseCaseFactoryDTO.IRequestRegistrationForCheffUseCaseFactory
{
  public getExecuteData(): RequestRegistrationForCheffUseCaseDTO.ExecuteDTO {
    return {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      gender: "preferNotToSay",
      mainCuisine: faker.lorem.word(),
      city: faker.address.city(),
      registerReason: faker.lorem.paragraph()
    };
  }
}

export { RequestRegistrationForCheffUseCaseFactory };
