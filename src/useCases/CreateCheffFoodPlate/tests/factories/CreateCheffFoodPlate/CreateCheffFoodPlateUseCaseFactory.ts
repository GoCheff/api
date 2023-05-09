import { faker } from "@faker-js/faker/locale/pt_BR";
import { CreateCheffFoodPlateUseCaseDTO } from "../../../CreateCheffFoodPlateUseCaseDTO";

class CreateCheffFoodPlateUseCaseFactory {
  public getExecuteData(): CreateCheffFoodPlateUseCaseDTO.ExecuteDTO {
    return {
      cheffId: faker.datatype.number(),
      name: faker.lorem.words(),
      description: faker.lorem.paragraph(),
      imageUrl: faker.image.imageUrl(),
      price: faker.datatype.float(),
      minServe: faker.datatype.number(),
      maxServe: faker.datatype.number(),
      cookTime: faker.datatype.float()
    };
  }
}

export { CreateCheffFoodPlateUseCaseFactory };
