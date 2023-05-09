import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";

namespace CustomerCheffsControllerDTO {
  export interface ICustomerCheffsController {
    get(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;
  }
}

export { CustomerCheffsControllerDTO };
