import { Response } from "express";
import { ExpressCustomTypes } from "../../../../../../@types/express";

namespace CustomerCartsControllerDTO {
  export interface ICustomerCartsController {
    get(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;

    patch(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;

    delete(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;

    payment(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<ExpressCustomTypes.Response>;
  }
}

export { CustomerCartsControllerDTO };
