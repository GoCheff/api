import { ApproveCustomerCartUseCase } from "./ApproveCustomerCartUseCase";
import { cartsRepository } from "../../repositories/Carts";

const approveCustomerCartUseCase = new ApproveCustomerCartUseCase(
  cartsRepository
);

export { approveCustomerCartUseCase };
