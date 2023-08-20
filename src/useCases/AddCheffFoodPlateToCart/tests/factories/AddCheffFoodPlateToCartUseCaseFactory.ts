import { AddCheffFoodPlateToCartUseCaseDTO } from "../../AddCheffFoodPlateToCartUseCaseDTO";
import { AddCheffFoodPlateToCartUseCaseFactoryDTO } from "./AddCheffFoodPlateToCartUseCaseFactoryDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class AddCheffFoodPlateToCartUseCaseFactory
  implements
    AddCheffFoodPlateToCartUseCaseFactoryDTO.IAddCheffFoodPlateToCartUseCaseFactory
{
  public getExecuteData(): AddCheffFoodPlateToCartUseCaseDTO.ExecuteDTO {
    return {
      customerId: faker.datatype.number(),
      locale: faker.address.city(),
      eventDate: new Date(),
      phoneContact: faker.phone.number(),
      observation: faker.lorem.paragraph(),
      cheffId: faker.datatype.number(),
      foodPlateId: faker.datatype.number(),
      quantity: faker.datatype.number()
    };
  }

  public async getExecuteResponseData(): AddCheffFoodPlateToCartUseCaseDTO.ExecuteResponseDTO {
    return {
      id: faker.datatype.number(),
      customerId: faker.datatype.number(),
      locale: faker.address.city(),
      eventDate: new Date(),
      phoneContact: faker.phone.number(),
      observation: faker.lorem.paragraph(),
      status: "open",
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      deletedAt: null
    };
  }
}

export { AddCheffFoodPlateToCartUseCaseFactory };
