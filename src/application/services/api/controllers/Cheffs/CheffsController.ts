import { Request, Response } from "express";
import { ExpressCustomTypes } from "../../../../../@types/express";
import { responseHandler } from "../../handlers";
import { CheffsSchema } from "../../../../../schemas/Cheffs";
import { CheffsControllerDTO } from "./CheffsControllerDTO";
import { SignInCheffUseCaseDTO } from "../../../../../useCases/SignInCheff/SignInCheffUseCaseDTO";

class CheffsController implements CheffsControllerDTO.ICheffsController {
  constructor(
    private readonly signInCheffUseCase: SignInCheffUseCaseDTO.ISignInCheffUseCase
  ) {}

  public async signIn(
    req: Request,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const source = req.body;

    const message = "Cheff signed in successfully";
    const data = await this.signInCheffUseCase.execute({
      email: source.email,
      password: source.password
    } as CheffsSchema.SignInDTO);
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

export { CheffsController };
