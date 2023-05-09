import { CreateCheffFoodPlateUseCaseDTO } from "../../../CreateCheffFoodPlateUseCaseDTO";

namespace CreateCheffFoodPlateUseCaseFactoryDTO {
  export interface ICreateCheffFoodPlateUseCaseFactory {
    getExecuteData(): CreateCheffFoodPlateUseCaseDTO.ExecuteDTO;
  }
}

export { CreateCheffFoodPlateUseCaseFactoryDTO };
