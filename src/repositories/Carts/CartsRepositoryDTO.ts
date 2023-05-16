import { Cart, CartIndludeRelations, CartItem } from "../../entities";

namespace CartsRepositoryDTO {
  export interface ICartsRepository {
    findByCustomerId(data: FindByCustomerIdDTO): FindByCustomerIdResponseDTO;

    findByStatusAndCheffId(
      data: FindByStatusAndCheffIdDTO
    ): FindByStatusAndCheffIdResponseDTO;

    create(data: CreateDTO): CreateResponseDTO;
  }

  export type FindByCustomerIdDTO = {
    customerId: number;
  } & {
    include?: CartIndludeRelations;
  };

  export type FindByCustomerIdResponseDTO = Promise<Cart | null>;

  export type FindByStatusAndCheffIdDTO = {
    status:
      | "open"
      | "sent"
      | "approved"
      | "rejected"
      | "paid"
      | "canceled"
      | "delivered";
    cheffId: number;
  };

  export type FindByStatusAndCheffIdResponseDTO = Promise<Cart[]>;

  export type CreateDTO = {
    customerId: number;
    cartItems: Omit<
      CartItem,
      "id" | "cartId" | "createdAt" | "updatedAt" | "deletedAt"
    >[];
  } & {
    include?: CartIndludeRelations;
  };

  export type CreateResponseDTO = Promise<Cart>;
}

export { CartsRepositoryDTO };
