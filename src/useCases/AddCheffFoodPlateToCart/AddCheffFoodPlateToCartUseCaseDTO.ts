import { Cart } from "../../entities";

namespace AddCheffFoodPlateToCartUseCaseDTO {
  export interface IAddCheffFoodPlateToCartUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    customerId: number;
    locale: string;
    eventDate: Date;
    phoneContact: string;
    observation?: string;
    cheffId: number;
    foodPlateId: number;
    quantity: number;
  };

  export type ExecuteResponseDTO = Promise<Cart>;
}

export { AddCheffFoodPlateToCartUseCaseDTO };
