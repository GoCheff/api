import { SignInCustomerUseCaseFactoryDTO } from "./SignInCustomerUseCaseFactoryDTO";
import { SignInCustomerUseCaseDTO } from "../../../SignInCustomerUseCaseDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class SignInCustomerUseCaseFactory
  implements SignInCustomerUseCaseFactoryDTO.ISignInCustomerUseCaseFactory
{
  public getExecuteData(): SignInCustomerUseCaseDTO.ExecuteDTO {
    return {
      email: faker.internet.email(),
      password: faker.internet.password()
    };
  }

  public async getExecuteResponseData(): SignInCustomerUseCaseDTO.ExecuteResponseDTO {
    return {
      user: {
        id: faker.datatype.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
        deletedAt: null
      },
      token: faker.datatype.uuid()
    };
  }
}

export { SignInCustomerUseCaseFactory };
