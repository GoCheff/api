import Joi from "joi";

namespace AdminCheffsSchema {
  export type ApproveDTO = {
    id: number;
    adminEmail: string;
    adminPassword: string;
  };

  export const ApproveBodySchema = Joi.object<ApproveDTO>({
    adminPassword: Joi.string().required()
  });
}

export { AdminCheffsSchema };
