import { Router } from "express";
import { validateSchemaMiddleware } from "../../../../../middlewares";
import { CheffsSchema } from "../../../../../schemas/Cheffs";
import { cheffsController } from "../../controllers/Cheffs";
import { foodPlatesRoutes } from "./FoodPlates";

const cheffsRoutes = Router();

cheffsRoutes.post(
  "/sign-in",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CheffsSchema.SignInBodySchema
  }),
  (req, res) => cheffsController.signIn(req, res)
);

cheffsRoutes.use("/food-plates", foodPlatesRoutes);

export { cheffsRoutes };
