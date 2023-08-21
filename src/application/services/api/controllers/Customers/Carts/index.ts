import { CustomerCartsController } from "./CustomerCartsController";
import { sendCartToCheffUseCase } from "../../../../../../useCases/SendCartToCheff";
import { getAllCartsFromCustomerUseCase } from "../../../../../../useCases/GetAllCartsFromCustomer";
import { cancelCartToCheffUseCase } from "../../../../../../useCases/CancelCartToCheff";

const customerCartsController = new CustomerCartsController(
  getAllCartsFromCustomerUseCase,
  sendCartToCheffUseCase,
  cancelCartToCheffUseCase
);

export { customerCartsController };
