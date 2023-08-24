import { Request, Response } from "express";
import { ExpressCustomTypes } from "../../../../../@types/express";

namespace AdminControllerDTO {
  export interface IAdminController {
    signIn(req: Request, res: Response): Promise<ExpressCustomTypes.Response>;

    auth(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;
  }
}

export { AdminControllerDTO };
