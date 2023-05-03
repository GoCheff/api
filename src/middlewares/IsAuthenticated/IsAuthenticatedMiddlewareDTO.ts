import { NextFunction, Request, Response } from "express";

namespace IsAuthenticatedMiddlewareDTO {
  export interface IIsAuthenticatedMiddleware {
    handle(req: Request, res: Response, next: NextFunction): HandleResponseDTO;
  }

  export type HandleResponseDTO = Promise<void>;
}

export { IsAuthenticatedMiddlewareDTO };
