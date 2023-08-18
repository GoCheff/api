namespace RefuseRegistrationForCheffUseCaseDTO {
  export interface IRefuseRegistrationForCheffUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    id: number;
    adminEmail: string;
    adminPassword: string;
  };

  export type ExecuteResponseDTO = Promise<void>;
}

export { RefuseRegistrationForCheffUseCaseDTO };
