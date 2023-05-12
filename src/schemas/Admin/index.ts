import { AdminCheffsSchema } from "./Cheffs";
import Joi from "joi";

namespace AdminSchema {
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

export { AdminSchema, AdminCheffsSchema };
