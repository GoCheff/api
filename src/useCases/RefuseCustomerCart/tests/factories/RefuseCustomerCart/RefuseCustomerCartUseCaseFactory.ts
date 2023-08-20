import { RefuseCustomerCartUseCaseFactoryDTO } from "./RefuseCustomerCartUseCaseFactoryDTO";
import { RefuseCustomerCartUseCaseDTO } from "../../../RefuseCustomerCartUseCaseDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class RefuseCustomerCartUseCaseFactory
  implements
    RefuseCustomerCartUseCaseFactoryDTO.IRefuseCustomerCartUseCaseFactory
{
  public getExecuteData(): RefuseCustomerCartUseCaseDTO.ExecuteDTO {
    return {
      cartId: faker.datatype.number()
    };
  }

  public async getExecuteResponseData(): RefuseCustomerCartUseCaseDTO.ExecuteResponseDTO {
    return {
      id: faker.datatype.number(),
      customerId: faker.datatype.number(),
      status: "sent",
      locale: faker.address.city(),
      eventDate: new Date(),
      phoneContact: faker.phone.number(),
      observation: faker.lorem.paragraph(),
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

export { RefuseCustomerCartUseCaseFactory };
