import { CartItem } from "../../entities";

namespace CartItemsRepositoryDTO {
  export interface ICartItemsRepository {
    updateQuantity(data: UpdateQuantityDTO): UpdateQuantityResponseDTO;

    create(data: CreateDTO): CreateResponseDTO;
  }

  export type UpdateQuantityDTO = {
    id: number;
    quantity: number;
  };

  export type UpdateQuantityResponseDTO = Promise<CartItem>;

  export type CreateDTO = {
    cartId: number;
    foodPlateId: number;
    quantity: number;
  };

  export type CreateResponseDTO = Promise<CartItem>;
}

export { CartItemsRepositoryDTO };
