import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";
import { CheffCartsControllerDTO } from "./CheffCartsControllerDTO";
import { responseHandler } from "../../../handlers";
import { GetAllSentCartsFromCheffUseCaseDTO } from "../../../../../../useCases/GetAllSentCartsFromCheff/GetAllSentCartsFromCheffUseCaseDTO";
import { ApproveCustomerCartUseCaseDTO } from "../../../../../../useCases/ApproveCustomerCart/ApproveCustomerCartUseCaseDTO";

class CheffCartsController
  implements CheffCartsControllerDTO.ICheffCartsController
{
  constructor(
    private readonly getAllSentCartsFromCheffUseCase: GetAllSentCartsFromCheffUseCaseDTO.IGetAllSentCartsFromCheffUseCase,
    private readonly approveCustomerCartUseCase: ApproveCustomerCartUseCaseDTO.IApproveCustomerCartUseCase
  ) {}

  public async get(
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
}

export { CheffCartsController };
