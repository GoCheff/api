import { CancelCartToCheffUseCaseFactoryDTO } from "./CancelCartToCheffUseCaseFactoryDTO";
import { CancelCartToCheffUseCaseDTO } from "../../../CancelCartToCheffUseCaseDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class CancelCartToCheffUseCaseFactory
  implements
    CancelCartToCheffUseCaseFactoryDTO.ICancelCartToCheffUseCaseFactory
{
  public getExecuteData(): CancelCartToCheffUseCaseDTO.ExecuteDTO {
    return {
      cartId: faker.datatype.number()
    };
  }

  public async getExecuteResponseData(): CancelCartToCheffUseCaseDTO.ExecuteResponseDTO {
    return {
      id: faker.datatype.number(),
      customerId: faker.datatype.number(),
      status: "open",
      locale: faker.address.city(),
      eventDate: new Date(),
      phoneContact: faker.phone.number(),
      observation: faker.lorem.paragraph(),
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    };
  }
}

export { CancelCartToCheffUseCaseFactory };
