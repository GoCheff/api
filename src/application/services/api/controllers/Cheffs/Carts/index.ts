import { CheffCartsController } from "./CheffCartsController";
import { getAllSentCartsFromCheffUseCase } from "../../../../../../useCases/GetAllSentCartsFromCheff";

const cheffCartsController = new CheffCartsController(
  getAllSentCartsFromCheffUseCase
);

export { cheffCartsController };
