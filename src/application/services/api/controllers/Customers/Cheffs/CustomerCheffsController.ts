import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";
import { CustomerCheffsControllerDTO } from "./CustomerCheffsControllerDTO";
import { GetCheffUseCaseDTO } from "../../../../../../useCases/GetCheff/GetCheffUseCaseDTO";
import { responseHandler } from "../../../handlers";

class CustomerCheffsController
  implements CustomerCheffsControllerDTO.ICustomerCheffsController
{
  constructor(
    private readonly getCheffUseCase: GetCheffUseCaseDTO.IGetCheffUseCase
  ) {}

  public async get(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id: cheffId } = req.params;

    const message = "Cheff retrieved successfully!";
    const data = await this.getCheffUseCase.execute({ cheffId: +cheffId });
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

export { CustomerCheffsController };
