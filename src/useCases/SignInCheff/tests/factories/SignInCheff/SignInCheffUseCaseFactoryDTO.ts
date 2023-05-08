import { SignInCheffUseCaseDTO } from "../../../SignInCheffUseCaseDTO";
import { Cheff } from "../../../../../entities";

namespace SignInCheffUseCaseFactoryDTO {
  export interface ISignInCheffUseCaseFactory {
    getExecuteData(): SignInCheffUseCaseDTO.ExecuteDTO;

    getExecuteResponseData(): SignInCheffUseCaseDTO.ExecuteResponseDTO;

    rejectItCheff(cheff: RejectItCheffDTO): RejectItCheffResponseDTO;

    setItCheffToPending(
      cheff: SetItCheffToPendingDTO
    ): SetItCheffToPendingResponseDTO;
  }

  export type RejectItCheffDTO = Cheff;

  export type RejectItCheffResponseDTO = Promise<Cheff>;

  export type SetItCheffToPendingDTO = Cheff;

  export type SetItCheffToPendingResponseDTO = Promise<Cheff>;
}

export { SignInCheffUseCaseFactoryDTO };
