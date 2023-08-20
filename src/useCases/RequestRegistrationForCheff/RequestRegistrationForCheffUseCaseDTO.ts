namespace RequestRegistrationForCheffUseCaseDTO {
  export interface IRequestRegistrationForCheffUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    name: string;
    email: string;
    password: string;
    gender: "female" | "male" | "other" | "preferNotToSay";
    mainCuisine: string;
    city: string;
    registerReason: string;
  };

  export type ExecuteResponseDTO = Promise<void>;
}

export { RequestRegistrationForCheffUseCaseDTO };
