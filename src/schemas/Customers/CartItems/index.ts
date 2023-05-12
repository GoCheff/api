import Joi from "joi";

namespace CustomerCartItemsSchema {
  export type UpdateOrCreateDTO = {
    customerId: number;
    cheffId: number;
    foodPlateId: number;
    quantity: number;
  };

  export const UpdateOrCreateBodySchema = Joi.object<UpdateOrCreateDTO>({
    cheffId: Joi.number().required(),
    quantity: Joi.number().integer().min(0).required()
  });
}

export { CustomerCartItemsSchema };
