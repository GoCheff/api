import { CustomerCartsController } from "./CustomerCartsController";
import { sendCartToCheffUseCase } from "../../../../../../useCases/SendCartToCheff";

const customerCartsController = new CustomerCartsController(
  sendCartToCheffUseCase
);

export { customerCartsController };
