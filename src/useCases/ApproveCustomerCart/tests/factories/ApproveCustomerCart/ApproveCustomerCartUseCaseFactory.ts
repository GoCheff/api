import { ApproveCustomerCartUseCaseFactoryDTO } from "./ApproveCustomerCartUseCaseFactoryDTO";
import { ApproveCustomerCartUseCaseDTO } from "../../../ApproveCustomerCartUseCaseDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class ApproveCustomerCartUseCaseFactory
  implements
    ApproveCustomerCartUseCaseFactoryDTO.IApproveCustomerCartUseCaseFactory
{
  public getExecuteData(): ApproveCustomerCartUseCaseDTO.ExecuteDTO {
    return {
      cartId: faker.datatype.number()
    };
  }

  public async getExecuteResponseData(): ApproveCustomerCartUseCaseDTO.ExecuteResponseDTO {
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

export { ApproveCustomerCartUseCaseFactory };
