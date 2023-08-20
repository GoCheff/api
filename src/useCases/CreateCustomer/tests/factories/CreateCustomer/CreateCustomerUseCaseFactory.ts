import { CreateCustomerUseCaseFactoryDTO } from "./CreateCustomerUseCaseFactoryDTO";
import { CreateCustomerUseCaseDTO } from "../../../CreateCustomerUseCaseDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class CreateCustomerUseCaseFactory
  implements CreateCustomerUseCaseFactoryDTO.ICreateCustomerUseCaseFactory
{
  public getExecuteData(): CreateCustomerUseCaseDTO.ExecuteDTO {
    return {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      gender: "preferNotToSay"
    };
  }
}

export { CreateCustomerUseCaseFactory };
