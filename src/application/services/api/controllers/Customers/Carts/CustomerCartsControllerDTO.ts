import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";

namespace CustomerCartsControllerDTO {
  export interface ICustomerCartsController {
    patch(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;
  }
}

export { CustomerCartsControllerDTO };
