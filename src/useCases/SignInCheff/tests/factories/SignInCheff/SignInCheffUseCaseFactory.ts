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
        registerStatus: "approved", // "approved" | "rejected" | "pending"
        registerReason: faker.lorem.sentence(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
        deletedAt: null
      },
      token: faker.datatype.uuid()
    };
  }

  public async rejectItCheff(
    cheff: SignInCheffUseCaseFactoryDTO.RejectItCheffDTO
  ): SignInCheffUseCaseFactoryDTO.RejectItCheffResponseDTO {
    return {
      ...cheff,
      registerStatus: "rejected" // "approved" | "rejected" | "pending"
    };
  }

  public async setItCheffToPending(
    cheff: SignInCheffUseCaseFactoryDTO.SetItCheffToPendingDTO
  ): SignInCheffUseCaseFactoryDTO.SetItCheffToPendingResponseDTO {
    return {
      ...cheff,
      registerStatus: "pending" // "approved" | "rejected" | "pending"
    };
  }
}

export { SignInCheffUseCaseFactory };
