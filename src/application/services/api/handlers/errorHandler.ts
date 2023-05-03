import { Request, Response, NextFunction } from "express";
import { responseHandler } from "./responseHandler";
import { AppError } from "../../../../errors/AppError";

function errorHandler(
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json(responseHandler(err));
  }

  console.log("-----------------------------------------------------");
  console.log(err);
  console.log("-----------------------------------------------------");

  const _err = new AppError("Internal server error", 500);

  res.status(_err.statusCode).json(responseHandler(_err));
}

export { errorHandler };
