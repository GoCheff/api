namespace ConfirmRegistrationForCheffUseCaseDTO {
  export interface IConfirmRegistrationForCheffUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    id: number;
    adminEmail: string;
    adminPassword: string;
  };

  export type ExecuteResponseDTO = Promise<void>;
}

export { ConfirmRegistrationForCheffUseCaseDTO };
