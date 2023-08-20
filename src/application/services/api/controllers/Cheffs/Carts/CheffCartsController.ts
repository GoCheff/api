import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";
import { CheffCartsControllerDTO } from "./CheffCartsControllerDTO";
import { responseHandler } from "../../../handlers";
import { GetAllSentCartsFromCheffUseCaseDTO } from "../../../../../../useCases/GetAllSentCartsFromCheff/GetAllSentCartsFromCheffUseCaseDTO";
import { ApproveCustomerCartUseCaseDTO } from "../../../../../../useCases/ApproveCustomerCart/ApproveCustomerCartUseCaseDTO";
import { GetAllCartsFromCheffUseCaseDTO } from "../../../../../../useCases/GetAllCartsFromCheff/GetAllCartsFromCheffUseCaseDTO";
import { RefuseCustomerCartUseCaseDTO } from "../../../../../../useCases/RefuseCustomerCart/RefuseCustomerCartUseCaseDTO";

class CheffCartsController
  implements CheffCartsControllerDTO.ICheffCartsController
{
  constructor(
    private readonly getAllCartsFromCheffUseCase: GetAllCartsFromCheffUseCaseDTO.IGetAllCartsFromCheffUseCase,
    private readonly getAllSentCartsFromCheffUseCase: GetAllSentCartsFromCheffUseCaseDTO.IGetAllSentCartsFromCheffUseCase,
    private readonly approveCustomerCartUseCase: ApproveCustomerCartUseCaseDTO.IApproveCustomerCartUseCase,
    private readonly refuseCustomerCartUseCase: RefuseCustomerCartUseCaseDTO.IRefuseCustomerCartUseCase
  ) {}

  public async get(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id } = req.user;

    const message = "Sent carts retrieved successfully";
    const data = await this.getAllCartsFromCheffUseCase.execute({
      cheffId: id
    });
    const statusCode = 200;

    return res
      .status(statusCode)
      .json(responseHandler({ message, data, statusCode }));
  }

  public async getAllSent(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id } = req.user;

    const message = "Sent carts retrieved successfully";
    const data = await this.getAllSentCartsFromCheffUseCase.execute({
      cheffId: id
    });
    const statusCode = 200;

    return res
      .status(statusCode)
      .json(responseHandler({ message, data, statusCode }));
  }

  public async approve(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id: cartId } = req.params;

    const message = "Cart approved successfully";
    const data = await this.approveCustomerCartUseCase.execute({
      cartId: +cartId
    });
    const statusCode = 200;

    return res
      .status(statusCode)
      .json(responseHandler({ message, data, statusCode }));
  }

  public async refuse(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id: cartId } = req.params;

    const message = "Cart refused successfully";
    const data = await this.refuseCustomerCartUseCase.execute({
      cartId: +cartId
    });
    const statusCode = 200;

    return res
      .status(statusCode)
      .json(responseHandler({ message, data, statusCode }));
  }
}

export { CheffCartsController };
