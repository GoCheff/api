import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";
import { CustomerCartsControllerDTO } from "./CustomerCartsControllerDTO";
import { SendCartToCheffUseCaseDTO } from "../../../../../../useCases/SendCartToCheff/SendCartToCheffUseCaseDTO";
import { responseHandler } from "../../../handlers";

class CustomerCartsController
  implements CustomerCartsControllerDTO.ICustomerCartsController
{
  constructor(
    private readonly sendCartToCheffUseCase: SendCartToCheffUseCaseDTO.ISendCartToCheffUseCase
  ) {}

  public async patch(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id: cartId } = req.params;

    const message = "Cart sent to cheff";
    const data = await this.sendCartToCheffUseCase.execute({ cartId: +cartId });
    const statusCode = 200;

    return res.status(statusCode).json(
      responseHandler({
        data,
        message,
        statusCode
      })
    );
  }
}

export { CustomerCartsController };
