import { AppError } from "./AppError";

class UnprocessableEntityError extends AppError {
  constructor(public readonly message: string = "Unprocessable Entity") {
    super(message, 422);
  }
}

export { UnprocessableEntityError };
