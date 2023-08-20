import { GetCheffUseCaseDTO } from "../../../GetCheffUseCaseDTO";
import { GetCheffUseCaseFactoryDTO } from "./GetCheffUseCaseFactoryDTO";
import { faker } from "@faker-js/faker/locale/pt_BR";

class GetCheffUseCaseFactory
  implements GetCheffUseCaseFactoryDTO.IGetCheffUseCaseFactory
{
  public getExecuteData(): GetCheffUseCaseDTO.ExecuteDTO {
    return {
      cheffId: faker.datatype.number()
    };
  }

  public async getExecuteResponseData(): GetCheffUseCaseDTO.ExecuteResponseDTO {
    return {
      id: faker.datatype.number(),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      gender: "preferNotToSay",
      mainCuisine: faker.lorem.sentence(),
      city: faker.address.city(),
      registerStatus: "approved", // "approved" | "rejected" | "pending"
      registerReason: faker.lorem.sentence(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
      deletedAt: null,
      foodPlates: []
    };
  }

  public generateFoodPlates({
    cheffId
  }: GetCheffUseCaseFactoryDTO.GenerateFoodPlatesDTO): GetCheffUseCaseFactoryDTO.GenerateFoodPlatesResponseDTO {
    return {
      id: faker.datatype.number(),
      cheffId,
      name: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      imageUrl: faker.image.imageUrl(),
      price: faker.datatype.number(),
      minServe: faker.datatype.number(),
      maxServe: faker.datatype.number(),
      cookTime: faker.datatype.number(),
      glutenFree: faker.datatype.boolean(),
      lactoseFree: faker.datatype.boolean(),
      vegan: faker.datatype.boolean(),
      vegetarian: faker.datatype.boolean(),
      light: faker.datatype.boolean(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
      deletedAt: null
    };
  }

  public async rejectItCheff(
    cheff: GetCheffUseCaseFactoryDTO.RejectItCheffDTO
  ): GetCheffUseCaseFactoryDTO.RejectItCheffResponseDTO {
    return {
      ...cheff,
      registerStatus: "rejected" // "approved" | "rejected" | "pending"
    };
  }

  public async setItCheffToPending(
    cheff: GetCheffUseCaseFactoryDTO.SetItCheffToPendingDTO
  ): GetCheffUseCaseFactoryDTO.SetItCheffToPendingResponseDTO {
    return {
      ...cheff,
      registerStatus: "pending" // "approved" | "rejected" | "pending"
    };
  }
}

export { GetCheffUseCaseFactory };
