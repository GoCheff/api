import { User } from "../../entities";
import { Request, Response as _Response } from "express";

namespace ExpressCustomTypes {
  export type AuthenticatedRequest = {
    user?: User;
  } & Request;

  export type Response = _Response<any, Record<string, any>>;
}

export { ExpressCustomTypes };
