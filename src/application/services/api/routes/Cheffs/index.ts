import { Router } from "express";
import { validateSchemaMiddleware } from "../../../../../middlewares";
import { CheffsSchema } from "../../../../../schemas/Cheffs";
import { cheffsController } from "../../controllers/Cheffs";
import { cheffFoodPlatesRoutes } from "./FoodPlates";
import { cheffCartsRoutes } from "./Carts";

const cheffsRoutes = Router();

cheffsRoutes.post(
  "/request-registration",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CheffsSchema.RequestRegistrationBodySchema
  }),
  (req, res) => cheffsController.requestRegistration(req, res)
);

cheffsRoutes.post(
  "/sign-in",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CheffsSchema.SignInBodySchema
  }),
  (req, res) => cheffsController.signIn(req, res)
);

cheffsRoutes.use("/carts", cheffCartsRoutes);
cheffsRoutes.use("/food-plates", cheffFoodPlatesRoutes);

export { cheffsRoutes };
