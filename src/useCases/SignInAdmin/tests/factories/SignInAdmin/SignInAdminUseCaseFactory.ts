import { SignInAdminUseCaseFactoryDTO } from "./SignInAdminUseCaseFactoryDTO";
import { SignInAdminUseCaseDTO } from "../../../SignInAdminUseCaseDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class SignInAdminUseCaseFactory
  implements SignInAdminUseCaseFactoryDTO.ISignInAdminUseCaseFactory
{
  public getExecuteData(): SignInAdminUseCaseDTO.ExecuteDTO {
    return {
      email: faker.internet.email(),
      password: faker.internet.password()
    };
  }

  public async getExecuteResponseData(): SignInAdminUseCaseDTO.ExecuteResponseDTO {
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

export { SignInAdminUseCaseFactory };
