import Joi from "joi";
import { CheffFoodPlatesSchema } from "./CheffFoodPlates";

namespace CheffsSchema {
  export type RequestRegistrationDTO = {
    email: string;
    password: string;
    registerReason: string;
  };

  export const RequestRegistrationBodySchema =
    Joi.object<RequestRegistrationDTO>({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      registerReason: Joi.string().required()
    });

  export type SignUpDTO = {
    email: string;
    password: string;
  };

  export const SignUpBodySchema = Joi.object<SignUpDTO>({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });

  export type SignInDTO = {
    email: string;
    password: string;
  };

  export const SignInBodySchema = Joi.object<SignInDTO>({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });
}

export { CheffsSchema, CheffFoodPlatesSchema };
