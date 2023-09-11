import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";
import { CustomerCartsControllerDTO } from "./CustomerCartsControllerDTO";
import { SendCartToCheffUseCaseDTO } from "../../../../../../useCases/SendCartToCheff/SendCartToCheffUseCaseDTO";
import { responseHandler } from "../../../handlers";
import { GetAllCartsFromCustomerUseCaseDTO } from "../../../../../../useCases/GetAllCartsFromCustomer/GetAllCartsFromCustomerUseCaseDTO";
import { CancelCartToCheffUseCaseDTO } from "../../../../../../useCases/CancelCartToCheff/CancelCartToCheffUseCaseDTO";
import {
  CANCELED_CART,
  CUSTOMER_CARTS_FETCHED,
  PAYMENT_CREATED,
  SENT_CART_TO_CHEFF
} from "../../../../../../data/texts";
import { CreatePaymentToCartUseCaseDTO } from "../../../../../../useCases/CreatePaymentToCart/CreatePaymentToCartUseCaseDTO";

class CustomerCartsController
  implements CustomerCartsControllerDTO.ICustomerCartsController
{
  constructor(
    private readonly getAllCartsFromCustomerUseCase: GetAllCartsFromCustomerUseCaseDTO.IGetAllCartsFromCustomerUseCase,
    private readonly sendCartToCheffUseCase: SendCartToCheffUseCaseDTO.ISendCartToCheffUseCase,
    private readonly cancelCartToCheffUseCase: CancelCartToCheffUseCaseDTO.ICancelCartToCheffUseCase,
    private readonly createPaymentToCartUseCase: CreatePaymentToCartUseCaseDTO.ICreatePaymentToCartUseCase
  ) {}

  public async get(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id: customerId } = req.user;

    const message = CUSTOMER_CARTS_FETCHED;
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

    const message = SENT_CART_TO_CHEFF;
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

  public async delete(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id: cartId } = req.params;

    const message = CANCELED_CART;
    const data = await this.cancelCartToCheffUseCase.execute({
      cartId: +cartId
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

  public async payment(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id: cartId } = req.params;

    const message = PAYMENT_CREATED;
    const data = await this.createPaymentToCartUseCase.execute({
      cartId: +cartId
    });
    const statusCode = 201;

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
