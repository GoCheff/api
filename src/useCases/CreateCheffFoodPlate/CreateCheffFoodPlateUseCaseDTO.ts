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
    glutenFree?: boolean;
    lactoseFree?: boolean;
    vegan?: boolean;
    vegetarian?: boolean;
    light?: boolean;
  };

  export type ExecuteResponseDTO = Promise<void>;
}

export { CreateCheffFoodPlateUseCaseDTO };
