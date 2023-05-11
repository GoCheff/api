import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";

namespace CustomerCartItemsControllerDTO {
  export interface ICustomerCartItemsController {
    updateOrCreate(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;
  }
}

export { CustomerCartItemsControllerDTO };
