import { AppError } from "./AppError";
import { UNAUTHORIZED } from "../data/texts";

class UnauthorizedError extends AppError {
  constructor(public readonly message: string = UNAUTHORIZED) {
    super(message, 401);
  }
}

export { UnauthorizedError };
