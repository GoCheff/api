import { Cheff } from "../../entities";

namespace GetCheffUseCaseDTO {
  export interface IGetCheffUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    cheffId: number;
  };

  export type ExecuteResponseDTO = Promise<Cheff>;
}

export { GetCheffUseCaseDTO };
