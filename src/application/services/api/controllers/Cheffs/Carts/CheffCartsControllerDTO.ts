import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";

namespace CheffCartsControllerDTO {
  export interface ICheffCartsController {
    get(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;

    approve(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;
  }
}

export { CheffCartsControllerDTO };
