namespace RequestRegistrationForCheffUseCaseDTO {
  export interface IRequestRegistrationForCheffUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    email: string;
    password: string;
    registerReason: string;
  };

  export type ExecuteResponseDTO = Promise<void>;
}

export { RequestRegistrationForCheffUseCaseDTO };
