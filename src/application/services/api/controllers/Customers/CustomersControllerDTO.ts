import { Request, Response } from "express";
import { ExpressCustomTypes } from "../../../../../@types/express";

namespace CustomersControllerDTO {
  export interface ICustomersController {
    signUp(req: Request, res: Response): Promise<ExpressCustomTypes.Response>;

    signIn(req: Request, res: Response): Promise<ExpressCustomTypes.Response>;

    auth(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;
  }
}

export { CustomersControllerDTO };
