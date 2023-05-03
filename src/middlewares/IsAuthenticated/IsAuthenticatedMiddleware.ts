import { NextFunction, Response } from "express";
import { TokenProviderDTO } from "../../providers/Token/TokenProviderDTO";
import { IsAuthenticatedMiddlewareDTO } from "./IsAuthenticatedMiddlewareDTO";
import { ExpressCustomTypes } from "../../@types/express";
import { UnauthorizedError } from "../../errors/UnauthorizedError";
import { UsersRepositoryDTO } from "../../repositories/Users/UsersRepositoryDTO";

class IsAuthenticatedMiddleware
  implements IsAuthenticatedMiddlewareDTO.IIsAuthenticatedMiddleware
{
  constructor(
    private readonly usersRepository: UsersRepositoryDTO.IUsersRepository,
    private readonly tokenProvider: TokenProviderDTO.ITokenProvider
  ) {}

  public async handle(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new UnauthorizedError();
    }

    const token = authorization.replace("Bearer ", "").trim();

    const { id } = await this.tokenProvider.verify(token);

    if (!id) {
      throw new UnauthorizedError();
    }

    const user = await this.usersRepository.findById({ id: +id });

    if (!user) {
      throw new UnauthorizedError();
    }

    req.user = user;
    next();
  }
}

export { IsAuthenticatedMiddleware };
