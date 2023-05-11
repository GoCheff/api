import { Cart, CartIndludeRelations, CartItem } from "../../entities";

namespace CartsRepositoryDTO {
  export interface ICartsRepository {
    findByCustomerId(data: FindByCustomerIdDTO): FindByCustomerIdResponseDTO;

    create(data: CreateDTO): CreateResponseDTO;
  }

  export type FindByCustomerIdDTO = {
    customerId: number;
  } & {
    include?: CartIndludeRelations;
  };

  export type FindByCustomerIdResponseDTO = Promise<Cart | null>;

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
