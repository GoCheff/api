namespace CreateCheffFoodPlateUseCaseDTO {
  export interface ICreateCheffFoodPlateUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    cheffId: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    minServe: number;
    maxServe: number;
    cookTime: number;
  };

  export type ExecuteResponseDTO = Promise<void>;
}

export { CreateCheffFoodPlateUseCaseDTO };
