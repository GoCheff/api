import { Router } from "express";
import { validateSchemaMiddleware } from "../../../../../middlewares";
import { CheffsSchema } from "../../../../../schemas/Cheffs";
import { cheffsController } from "../../controllers/Cheffs";

const cheffsRoutes = Router();

cheffsRoutes.post(
  "/sign-in",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CheffsSchema.SignInBodySchema
  }),
  (req, res) => cheffsController.signIn(req, res)
);

export { cheffsRoutes };
