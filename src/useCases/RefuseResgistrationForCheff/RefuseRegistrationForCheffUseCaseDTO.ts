namespace RefuseRegistrationForCheffUseCaseDTO {
  export interface IRefuseRegistrationForCheffUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    id: number;
  };

  export type ExecuteResponseDTO = Promise<void>;
}

export { RefuseRegistrationForCheffUseCaseDTO };
