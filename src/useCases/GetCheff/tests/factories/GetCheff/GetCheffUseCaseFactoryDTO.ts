import { GetCheffUseCaseDTO } from "../../../GetCheffUseCaseDTO";
import { Cheff, FoodPlate } from "../../../../../entities";

namespace GetCheffUseCaseFactoryDTO {
  export interface IGetCheffUseCaseFactory {
    getExecuteData(): GetCheffUseCaseDTO.ExecuteDTO;

    getExecuteResponseData(): GetCheffUseCaseDTO.ExecuteResponseDTO;

    generateFoodPlates(
      data: GenerateFoodPlatesDTO
    ): GenerateFoodPlatesResponseDTO;

    rejectItCheff(cheff: RejectItCheffDTO): RejectItCheffResponseDTO;

    setItCheffToPending(
      cheff: SetItCheffToPendingDTO
    ): SetItCheffToPendingResponseDTO;
  }

  export type GenerateFoodPlatesDTO = {
    cheffId: number;
  };

  export type GenerateFoodPlatesResponseDTO = FoodPlate;

  export type RejectItCheffDTO = Cheff;

  export type RejectItCheffResponseDTO = Promise<Cheff>;

  export type SetItCheffToPendingDTO = Cheff;

  export type SetItCheffToPendingResponseDTO = Promise<Cheff>;
}

export { GetCheffUseCaseFactoryDTO };
