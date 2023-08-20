import { CheffCartsController } from "./CheffCartsController";
import { getAllSentCartsFromCheffUseCase } from "../../../../../../useCases/GetAllSentCartsFromCheff";
import { approveCustomerCartUseCase } from "../../../../../../useCases/ApproveCustomerCart";
import { getAllCartsFromCheffUseCase } from "../../../../../../useCases/GetAllCartsFromCheff";
import { refuseCustomerCartUseCase } from "../../../../../../useCases/RefuseCustomerCart";

const cheffCartsController = new CheffCartsController(
  getAllCartsFromCheffUseCase,
  getAllSentCartsFromCheffUseCase,
  approveCustomerCartUseCase,
  refuseCustomerCartUseCase
);

export { cheffCartsController };
