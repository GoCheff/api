import { SignInCheffUseCaseFactoryDTO } from "./SignInCheffUseCaseFactoryDTO";
import { SignInCheffUseCaseDTO } from "../../../SignInCheffUseCaseDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class SignInCheffUseCaseFactory
  implements SignInCheffUseCaseFactoryDTO.ISignInCheffUseCaseFactory
{
  public getExecuteData(): SignInCheffUseCaseDTO.ExecuteDTO {
    return {
      email: faker.internet.email(),
      password: faker.internet.password()
    };
  }

  public async getExecuteResponseData(): SignInCheffUseCaseDTO.ExecuteResponseDTO {
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

export { SignInCheffUseCaseFactory };
