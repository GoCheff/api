import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";
import { CustomerCartsControllerDTO } from "./CustomerCartsControllerDTO";
import { SendCartToCheffUseCaseDTO } from "../../../../../../useCases/SendCartToCheff/SendCartToCheffUseCaseDTO";
import { responseHandler } from "../../../handlers";
import { GetAllCartsFromCustomerUseCaseDTO } from "../../../../../../useCases/GetAllCartsFromCustomer/GetAllCartsFromCustomerUseCaseDTO";

class CustomerCartsController
  implements CustomerCartsControllerDTO.ICustomerCartsController
{
  constructor(
    private readonly getAllCartsFromCustomerUseCase: GetAllCartsFromCustomerUseCaseDTO.IGetAllCartsFromCustomerUseCase,
    private readonly sendCartToCheffUseCase: SendCartToCheffUseCaseDTO.ISendCartToCheffUseCase
  ) {}

  public async get(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id: customerId } = req.user;

    const message = "Carts found";
    const data = await this.getAllCartsFromCustomerUseCase.execute({
      customerId
    });
    const statusCode = 200;

    return res.status(statusCode).json(
      responseHandler({
        data,
        message,
        statusCode
      })
    );
  }

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
