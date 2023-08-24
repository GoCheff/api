import { Request, Response } from "express";
import { ExpressCustomTypes } from "../../../../../@types/express";
import { responseHandler } from "../../handlers";
import { CheffsSchema } from "../../../../../schemas/Cheffs";
import { CheffsControllerDTO } from "./CheffsControllerDTO";
import { SignInCheffUseCaseDTO } from "../../../../../useCases/SignInCheff/SignInCheffUseCaseDTO";
import { RequestRegistrationForCheffUseCaseDTO } from "../../../../../useCases/RequestRegistrationForCheff/RequestRegistrationForCheffUseCaseDTO";
import {
  ADMIN_SIGNED_IN,
  CHEFF_REQUEST_REGISTRATION,
  CHEFF_SIGNED_IN
} from "../../../../../data/texts";

class CheffsController implements CheffsControllerDTO.ICheffsController {
  constructor(
    private readonly requestRegistrationCheffUseCase: RequestRegistrationForCheffUseCaseDTO.IRequestRegistrationForCheffUseCase,
    private readonly signInCheffUseCase: SignInCheffUseCaseDTO.ISignInCheffUseCase
  ) {}

  public async requestRegistration(
    req: Request,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const source = req.body;

    const message = CHEFF_REQUEST_REGISTRATION;
    await this.requestRegistrationCheffUseCase.execute({
      name: source.name,
      email: source.email,
      password: source.password,
      gender: source.gender,
      mainCuisine: source.mainCuisine,
      city: source.city,
      registerReason: source.registerReason
    } as CheffsSchema.RequestRegistrationDTO);
    const statusCode = 201;

    return res.status(statusCode).json(
      responseHandler({
        message,
        statusCode
      })
    );
  }

  public async signIn(
    req: Request,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const source = req.body;

    const message = CHEFF_SIGNED_IN;
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

  public async auth(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const source = req.user;

    const message = CHEFF_SIGNED_IN;
    const data = source;
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
