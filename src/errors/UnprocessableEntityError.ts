import { AppError } from "./AppError";
import { UNPROCESSABLE_ENTITY } from "../data/texts";

class UnprocessableEntityError extends AppError {
  constructor(public readonly message: string = UNPROCESSABLE_ENTITY) {
    super(message, 422);
  }
}

export { UnprocessableEntityError };
