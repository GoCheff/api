import { Request, Response } from "express";
import { ExpressCustomTypes } from "../../../../../@types/express";

namespace CheffsControllerDTO {
  export interface ICheffsController {
    requestRegistration(
      req: Request,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;

    signIn(req: Request, res: Response): Promise<ExpressCustomTypes.Response>;
  }
}

export { CheffsControllerDTO };
