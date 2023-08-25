namespace ConfirmRegistrationForCheffUseCaseDTO {
  export interface IConfirmRegistrationForCheffUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    id: number;
  };

  export type ExecuteResponseDTO = Promise<void>;
}

export { ConfirmRegistrationForCheffUseCaseDTO };
