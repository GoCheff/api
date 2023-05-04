import { AppError } from "./AppError";

class NotFoundError extends AppError {
  constructor(public readonly message: string = "Not found") {
    super(message, 404);
  }
}

export { NotFoundError };
