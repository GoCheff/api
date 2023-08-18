import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";
import { AdminCheffsControllerDTO } from "./AdminCheffsControllerDTO";
import { responseHandler } from "../../../handlers";
import { GetAllPendingCheffsUseCaseDTO } from "../../../../../../useCases/GetAllPendingCheffs/GetAllPendingCheffsUseCaseDTO";
import { ConfirmRegistrationForCheffUseCaseDTO } from "../../../../../../useCases/ConfirmResgistrationForCheff/ConfirmRegistrationForCheffUseCaseDTO";
import { AdminCheffsSchema } from "../../../../../../schemas/Admin";
import { RefuseRegistrationForCheffUseCaseDTO } from "../../../../../../useCases/RefuseResgistrationForCheff/RefuseRegistrationForCheffUseCaseDTO";

class AdminCheffsController
  implements AdminCheffsControllerDTO.IAdminCheffsController
{
  constructor(
    private readonly getAllPendingCheffs: GetAllPendingCheffsUseCaseDTO.IGetAllPendingCheffsUseCase,
    private readonly confirmRegistrationForCheff: ConfirmRegistrationForCheffUseCaseDTO.IConfirmRegistrationForCheffUseCase,
    private readonly refuseRegistrationForCheff: RefuseRegistrationForCheffUseCaseDTO.IRefuseRegistrationForCheffUseCase
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

  public async approve(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id } = req.params;
    const { email: adminEmail } = req.user;
    const { password: adminPassword } = req.body;

    const message = "Cheff approved successfully";
    await this.confirmRegistrationForCheff.execute({
      id: +id,
      adminEmail,
      adminPassword
    } as AdminCheffsSchema.ApproveDTO);
    const statusCode = 200;

    return res
      .status(statusCode)
      .json(responseHandler({ message, statusCode }));
  }

  public async refuse(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const { id } = req.params;
    const { email: adminEmail } = req.user;
    const { password: adminPassword } = req.body;

    const message = "Cheff refused successfully";
    await this.refuseRegistrationForCheff.execute({
      id: +id,
      adminEmail,
      adminPassword
    } as AdminCheffsSchema.RefuseDTO);
    const statusCode = 200;

    return res
      .status(statusCode)
      .json(responseHandler({ message, statusCode }));
  }
}

export { AdminCheffsController };
