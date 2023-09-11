import { CustomerCartsController } from "./CustomerCartsController";
import { sendCartToCheffUseCase } from "../../../../../../useCases/SendCartToCheff";
import { getAllCartsFromCustomerUseCase } from "../../../../../../useCases/GetAllCartsFromCustomer";
import { cancelCartToCheffUseCase } from "../../../../../../useCases/CancelCartToCheff";
import { createPaymentToCartUseCase } from "../../../../../../useCases/CreatePaymentToCart";

const customerCartsController = new CustomerCartsController(
  getAllCartsFromCustomerUseCase,
  sendCartToCheffUseCase,
  cancelCartToCheffUseCase,
  createPaymentToCartUseCase
);

export { customerCartsController };
