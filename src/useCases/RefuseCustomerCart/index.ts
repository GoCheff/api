import { RefuseCustomerCartUseCase } from "./RefuseCustomerCartUseCase";
import { cartsRepository } from "../../repositories/Carts";

const refuseCustomerCartUseCase = new RefuseCustomerCartUseCase(
  cartsRepository
);

export { refuseCustomerCartUseCase };
