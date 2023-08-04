import { CheffCartsController } from "./CheffCartsController";
import { getAllSentCartsFromCheffUseCase } from "../../../../../../useCases/GetAllSentCartsFromCheff";
import { approveCustomerCartUseCase } from "../../../../../../useCases/ApproveCustomerCart";
import { getAllCartsFromCheffUseCase } from "../../../../../../useCases/GetAllCartsFromCheff";

const cheffCartsController = new CheffCartsController(
  getAllCartsFromCheffUseCase,
  getAllSentCartsFromCheffUseCase,
  approveCustomerCartUseCase
);

export { cheffCartsController };
