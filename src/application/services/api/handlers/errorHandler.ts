import { Request, Response, NextFunction } from "express";
import { responseHandler } from "./responseHandler";
import { AppError } from "../../../../errors/AppError";
import { INTERNAL_SERVER_ERROR } from "../../../../data/texts";

function errorHandler(
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.name === "AppError") {
    const _err = err as AppError;

    return res.status(_err.statusCode).json(responseHandler(_err));
  }

  console.log("-----------------------------------------------------");
  console.log(err);
  console.log("-----------------------------------------------------");

  const _err = new AppError(INTERNAL_SERVER_ERROR, 500);

  res.status(_err.statusCode).json(responseHandler(_err));
}

export { errorHandler };
