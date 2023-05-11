import { AddCheffFoodPlateToCartUseCaseDTO } from "../../AddCheffFoodPlateToCartUseCaseDTO";

namespace AddCheffFoodPlateToCartUseCaseFactoryDTO {
  export interface IAddCheffFoodPlateToCartUseCaseFactory {
    getExecuteData(): AddCheffFoodPlateToCartUseCaseDTO.ExecuteDTO;

    getExecuteResponseData(): AddCheffFoodPlateToCartUseCaseDTO.ExecuteResponseDTO;
  }
}

export { AddCheffFoodPlateToCartUseCaseFactoryDTO };
