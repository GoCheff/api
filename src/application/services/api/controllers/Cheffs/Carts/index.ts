import { CheffCartsController } from "./CheffCartsController";
import { getAllSentCartsFromCheffUseCase } from "../../../../../../useCases/GetAllSentCartsFromCheff";
import { approveCustomerCartUseCase } from "../../../../../../useCases/ApproveCustomerCart";

const cheffCartsController = new CheffCartsController(
  getAllSentCartsFromCheffUseCase,
  approveCustomerCartUseCase
);

export { cheffCartsController };
