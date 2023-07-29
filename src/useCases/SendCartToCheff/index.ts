import { SendCartToCheffUseCase } from "./SendCartToCheffUseCase";
import { cartsRepository } from "../../repositories/Carts";

const sendCartToCheffUseCase = new SendCartToCheffUseCase(cartsRepository);

export { sendCartToCheffUseCase };
