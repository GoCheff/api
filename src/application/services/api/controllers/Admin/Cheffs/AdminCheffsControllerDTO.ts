import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";

namespace AdminCheffsControllerDTO {
  export interface IAdminCheffsController {
    getAllPending(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;

    approve(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;

    refuse(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;
  }
}

export { AdminCheffsControllerDTO };
