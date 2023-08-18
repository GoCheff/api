import { Cheff } from "../../entities";

namespace GetAllApprovedCheffsUseCaseDTO {
  export interface IGetAllApprovedCheffsUseCase {
    execute(): ExecuteResponseDTO;
  }

  export type ExecuteResponseDTO = Promise<Cheff[]>;
}

export { GetAllApprovedCheffsUseCaseDTO };
