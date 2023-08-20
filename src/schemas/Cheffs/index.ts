import Joi from "joi";
import { CheffFoodPlatesSchema } from "./FoodPlates";

namespace CheffsSchema {
  export type RequestRegistrationDTO = {
    name: string;
    email: string;
    password: string;
    gender: "female" | "male" | "other" | "preferNotToSay";
    mainCuisine: string;
    city: string;
    registerReason: string;
  };

  export const RequestRegistrationBodySchema =
    Joi.object<RequestRegistrationDTO>({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      gender: Joi.string()
        .valid("female", "male", "other", "preferNotToSay")
        .required(),
      mainCuisine: Joi.string().required(),
      city: Joi.string().required(),
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
