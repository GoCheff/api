import { CustomerCartItemsSchema } from "./CartItems";
import Joi from "joi";

namespace CustomersSchema {
  export type SignUpDTO = {
    name: string;
    email: string;
    password: string;
    gender: "female" | "male" | "other" | "preferNotToSay";
  };

  export const SignUpBodySchema = Joi.object<SignUpDTO>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    gender: Joi.string()
      .valid("female", "male", "other", "preferNotToSay")
      .required()
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

export { CustomersSchema, CustomerCartItemsSchema };
