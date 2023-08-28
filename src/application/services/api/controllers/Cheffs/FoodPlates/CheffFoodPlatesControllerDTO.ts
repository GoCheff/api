import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";

namespace CheffFoodPlatesControllerDTO {
  export interface ICheffFoodPlatesController {
    get(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;
    create(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;
  }
}

export { CheffFoodPlatesControllerDTO };
