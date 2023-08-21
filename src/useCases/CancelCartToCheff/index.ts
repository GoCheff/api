import { CancelCartToCheffUseCase } from "./CancelCartToCheffUseCase";
import { cartsRepository } from "../../repositories/Carts";

const cancelCartToCheffUseCase = new CancelCartToCheffUseCase(cartsRepository);

export { cancelCartToCheffUseCase };
