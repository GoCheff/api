import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";
import { AdminCheffsControllerDTO } from "./AdminCheffsControllerDTO";
import { responseHandler } from "../../../handlers";
import { GetAllPendingCheffsUseCaseDTO } from "../../../../../../useCases/GetAllPendingCheffs/GetAllPendingCheffsUseCaseDTO";

class AdminCheffsController
  implements AdminCheffsControllerDTO.IAdminCheffsController
{
  constructor(
    private readonly getAllPendingCheffs: GetAllPendingCheffsUseCaseDTO.IGetAllPendingCheffsUseCase
  ) {}

  public async getAllPending(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const message = "All pending cheffs fetched successfully";
    const data = await this.getAllPendingCheffs.execute();
    const statusCode = 200;

    return res
      .status(statusCode)
      .json(responseHandler({ data, message, statusCode }));
  }
}

export { AdminCheffsController };
