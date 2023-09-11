import { Cart } from "../../entities";

namespace CreatePaymentToCartUseCaseDTO {
  export interface ICreatePaymentToCartUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    cartId: number;
  };

  export type ExecuteResponseDTO = Promise<{
    cart: Cart;
    paymentLink: string;
  }>;
}

export { CreatePaymentToCartUseCaseDTO };
