import Joi from "joi";

namespace CustomerCheffsSchema {
  export type GetAllDTO = {
    name?: string;
    mainCuisine?: string;
    city?: string;
    glutenFree?: boolean;
    lactoseFree?: boolean;
    vegan?: boolean;
    vegetarian?: boolean;
    light?: boolean;
    limit?: number;
    offset?: number;
  };

  export const GetAllQuerySchema = Joi.object<GetAllDTO>({
    name: Joi.string().optional(),
    mainCuisine: Joi.string().optional(),
    city: Joi.string().optional(),
    glutenFree: Joi.boolean().optional(),
    lactoseFree: Joi.boolean().optional(),
    vegan: Joi.boolean().optional(),
    vegetarian: Joi.boolean().optional(),
    light: Joi.boolean().optional(),
    limit: Joi.number().optional(),
    offset: Joi.number().optional()
  });
}

export { CustomerCheffsSchema };
