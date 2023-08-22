import Joi from "joi";

namespace CheffFoodPlatesSchema {
  export type CreateDTO = {
    cheffId: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    minServe: number;
    maxServe: number;
    cookTime: number;
    glutenFree?: boolean;
    lactoseFree?: boolean;
    vegan?: boolean;
    vegetarian?: boolean;
    light?: boolean;
  };

  export const CreateBodySchema = Joi.object<CreateDTO>({
    cheffId: Joi.number().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    imageUrl: Joi.string().uri().required(),
    price: Joi.number().min(0).required(),
    minServe: Joi.number().integer().min(0).required(),
    maxServe: Joi.number().integer().min(Joi.ref("minServe")).required(),
    cookTime: Joi.number().min(0).required(),
    glutenFree: Joi.boolean().optional(),
    lactoseFree: Joi.boolean().optional(),
    vegan: Joi.boolean().optional(),
    vegetarian: Joi.boolean().optional(),
    light: Joi.boolean().optional()
  });
}

export { CheffFoodPlatesSchema };
