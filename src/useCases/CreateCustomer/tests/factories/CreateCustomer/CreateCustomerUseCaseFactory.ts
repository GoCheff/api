import { CreateCustomerUseCaseFactoryDTO } from "./CreateCustomerUseCaseFactoryDTO";
import { CreateCustomerUseCaseDTO } from "../../../CreateCustomerUseCaseDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class CreateCustomerUseCaseFactory
  implements CreateCustomerUseCaseFactoryDTO.ICreateCustomerUseCaseFactory
{
  public getExecuteData(): CreateCustomerUseCaseDTO.ExecuteDTO {
    return {
      email: faker.internet.email(),
      password: faker.internet.password()
    };
  }
}

export { CreateCustomerUseCaseFactory };
