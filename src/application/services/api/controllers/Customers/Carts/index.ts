import { CustomerCartsController } from "./CustomerCartsController";
import { sendCartToCheffUseCase } from "../../../../../../useCases/SendCartToCheff";
import { getAllCartsFromCustomerUseCase } from "../../../../../../useCases/GetAllCartsFromCustomer";

const customerCartsController = new CustomerCartsController(
  getAllCartsFromCustomerUseCase,
  sendCartToCheffUseCase
);

export { customerCartsController };
