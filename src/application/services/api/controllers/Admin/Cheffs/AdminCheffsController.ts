import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";
import { AdminCheffsControllerDTO } from "./AdminCheffsControllerDTO";
import { responseHandler } from "../../../handlers";
import { GetAllPendingCheffsUseCaseDTO } from "../../../../../../useCases/GetAllPendingCheffs/GetAllPendingCheffsUseCaseDTO";
import { ConfirmRegistrationForCheffUseCaseDTO } from "../../../../../../useCases/ConfirmResgistrationForCheff/ConfirmRegistrationForCheffUseCaseDTO";
import { AdminCheffsSchema } from "../../../../../../schemas/Admin";
import { RefuseRegistrationForCheffUseCaseDTO } from "../../../../../../useCases/RefuseResgistrationForCheff/RefuseRegistrationForCheffUseCaseDTO";
import { GetAllApprovedCheffsUseCaseDTO } from "../../../../../../useCases/GetAllApprovedCheffs/GetAllApprovedCheffsUseCaseDTO";
import {
  APPROVED_CHEFFS_FETCHED,
  CHEFF_APPROVED,
  CHEFF_REFUSED,
  PENDING_CHEFFS_FETCHED
} from "../../../../../../data/texts";

class AdminCheffsController
  implements AdminCheffsControllerDTO.IAdminCheffsController
{
  constructor(
    private readonly getAllPendingCheffs: GetAllPendingCheffsUseCaseDTO.IGetAllPendingCheffsUseCase,
    private readonly confirmRegistrationForCheff: ConfirmRegistrationForCheffUseCaseDTO.IConfirmRegistrationForCheffUseCase,
    private readonly refuseRegistrationForCheff: RefuseRegistrationForCheffUseCaseDTO.IRefuseRegistrationForCheffUseCase,
    private readonly getAllApprovedCheffs: GetAllApprovedCheffsUseCaseDTO.IGetAllApprovedCheffsUseCase
  ) {}

  public async getAllPending(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const message = PENDING_CHEFFS_FETCHED;
    const data = await this.getAllPendingCheffs.execute();
    const statusCode = 200;

    return res
      .status(statusCode)
      .json(responseHandler({ data, message, statusCode }));
  }

  public async getAllApproved(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const message = APPROVED_CHEFFS_FETCHED;
    const data = await this.getAllApprovedCheffs.execute();
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

    const message = CHEFF_APPROVED;
    await this.confirmRegistrationForCheff.execute({
      id: +id
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

    const message = CHEFF_REFUSED;
    await this.refuseRegistrationForCheff.execute({
      id: +id
    } as AdminCheffsSchema.RefuseDTO);
    const statusCode = 200;

    return res
      .status(statusCode)
      .json(responseHandler({ message, statusCode }));
  }
}

export { AdminCheffsController };
