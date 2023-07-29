import { SendCartToCheffUseCaseFactoryDTO } from "./SendCartToCheffUseCaseFactoryDTO";
import { SendCartToCheffUseCaseDTO } from "../../../SendCartToCheffUseCaseDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class SendCartToCheffUseCaseFactory
  implements SendCartToCheffUseCaseFactoryDTO.ISendCartToCheffUseCaseFactory
{
  public getExecuteData(): SendCartToCheffUseCaseDTO.ExecuteDTO {
    return {
      cartId: faker.datatype.number()
    };
  }

  public async getExecuteResponseData(): SendCartToCheffUseCaseDTO.ExecuteResponseDTO {
    return {
      id: faker.datatype.number(),
      customerId: faker.datatype.number(),
      status: "open",
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      cartItems: [
        {
          id: faker.datatype.number(),
          cartId: faker.datatype.number(),
          foodPlateId: faker.datatype.number(),
          quantity: faker.datatype.number(),
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        }
      ]
    };
  }
}

export { SendCartToCheffUseCaseFactory };
