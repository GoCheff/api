import { Cart, CartIncludeRelations, CartItem } from "../../entities";

namespace CartsRepositoryDTO {
  export interface ICartsRepository {
    findById(data: FindByIdDTO): FindByIdResponseDTO;

    findByCustomerId(data: FindByCustomerIdDTO): FindByCustomerIdResponseDTO;

    findByStatusAndCheffId(
      data: FindByStatusAndCheffIdDTO
    ): FindByStatusAndCheffIdResponseDTO;

    findByCheffId(data: FindByCheffIdDTO): FindByCheffIdResponseDTO;

    create(data: CreateDTO): CreateResponseDTO;

    update(data: UpdateDTO): UpdateResponseDTO;
  }

  export type FindByIdDTO = {
    id: number;
  } & {
    include?: CartIncludeRelations;
  };

  export type FindByIdResponseDTO = Promise<Cart | null>;

  export type FindByCustomerIdDTO = {
    customerId: number;
    where?: {
      status?:
        | "open"
        | "sent"
        | "approved"
        | "rejected"
        | "paid"
        | "canceled"
        | "delivered";
    };
  } & {
    include?: CartIncludeRelations;
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

  export type FindByCheffIdDTO = {
    cheffId: number;
  };

  export type FindByCheffIdResponseDTO = Promise<Cart[]>;

  export type CreateDTO = {
    customerId: number;
    locale: string;
    eventDate: Date;
    phoneContact: string;
    observation: string;
    cartItems: Omit<
      CartItem,
      "id" | "cartId" | "createdAt" | "updatedAt" | "deletedAt"
    >[];
  } & {
    include?: CartIncludeRelations;
  };

  export type CreateResponseDTO = Promise<Cart>;

  export type UpdateDTO = {
    id: number;
    status:
      | "open"
      | "sent"
      | "approved"
      | "rejected"
      | "paid"
      | "canceled"
      | "delivered";
  };

  export type UpdateResponseDTO = Promise<Cart>;
}

export { CartsRepositoryDTO };
