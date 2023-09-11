import { CreatePaymentToCartUseCase } from "./CreatePaymentToCartUseCase";
import { cartsRepository } from "../../repositories/Carts";
import { paymentProvider } from "../../providers/Payment";

const createPaymentToCartUseCase = new CreatePaymentToCartUseCase(
  cartsRepository,
  paymentProvider
);

export { createPaymentToCartUseCase };
