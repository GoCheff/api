import { Request, Response } from "express";
import { CustomersControllerDTO } from "./CustomersControllerDTO";
import { ExpressCustomTypes } from "../../../../../@types/express";
import { CreateCustomerUseCaseDTO } from "../../../../../useCases/CreateCustomer/CreateCustomerUseCaseDTO";
import { SignInCustomerUseCaseDTO } from "../../../../../useCases/SignInCustomer/SignInCustomerUseCaseDTO";
import { responseHandler } from "../../handlers";
import { CustomersSchema } from "../../../../../schemas/Customers";
import {
  ADMIN_SIGNED_IN,
  CUSTOMER_SIGN_IN,
  CUSTOMER_SIGN_UP
} from "../../../../../data/texts";

class CustomersController
  implements CustomersControllerDTO.ICustomersController
{
  constructor(
    private readonly createCustomerUseCase: CreateCustomerUseCaseDTO.ICreateCustomerUseCase,
    private readonly signInCustomerUseCase: SignInCustomerUseCaseDTO.ISignInCustomerUseCase
  ) {}

  public async signUp(
    req: Request,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const source = req.body;

    const message = CUSTOMER_SIGN_UP;
    const data = await this.createCustomerUseCase.execute({
      name: source.name,
      email: source.email,
      password: source.password,
      gender: source.gender
    } as CustomersSchema.SignUpDTO);
    const statusCode = 201;

    return res.status(statusCode).json(
      responseHandler({
        message,
        data,
        statusCode
      })
    );
  }

  public async signIn(
    req: Request,
    res: Response
  ): Promise<ExpressCustomTypes.Response> {
    const source = req.body;

    const message = CUSTOMER_SIGN_IN;
    const data = await this.signInCustomerUseCase.execute({
      email: source.email,
      password: source.password
    } as CustomersSchema.SignInDTO);
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

    const message = CUSTOMER_SIGN_IN;
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

export { CustomersController };
