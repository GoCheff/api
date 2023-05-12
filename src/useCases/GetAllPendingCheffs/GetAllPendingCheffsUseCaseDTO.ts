import { Cheff } from "../../entities";

namespace GetAllPendingCheffsUseCaseDTO {
  export interface IGetAllPendingCheffsUseCase {
    execute(): ExecuteResponseDTO;
  }

  export type ExecuteResponseDTO = Promise<Cheff[]>;
}

export { GetAllPendingCheffsUseCaseDTO };
