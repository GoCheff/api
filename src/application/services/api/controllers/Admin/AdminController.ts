import { Request, Response } from "express";
import { ExpressCustomTypes } from "../../../../../@types/express";
import { responseHandler } from "../../handlers";
import { SignInAdminUseCaseDTO } from "../../../../../useCases/SignInAdmin/SignInAdminUseCaseDTO";
import { AdminControllerDTO } from "./AdminControllerDTO";
import { AdminSchema } from "../../../../../schemas/Admin";

class AdminController implements AdminControllerDTO.IAdminController {
  constructor(
    private readonly signInAdminUseCase: SignInAdminUseCaseDTO.ISignInAdminUseCase
  ) {}

  public async signIn(
    req: Request,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const source = req.body;

    const message = "Admin signed in successfully";
    const data = await this.signInAdminUseCase.execute({
      email: source.email,
      password: source.password
    } as AdminSchema.SignInDTO);
    const statusCode = 200;

    return res.status(statusCode).json(
      responseHandler({
        message,
        data,
        statusCode
      })
    );
  }
}

export { AdminController };
