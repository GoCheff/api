import { Router } from "express";
import { cheffFoodPlatesController } from "../../../controllers/Cheffs";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { validateSchemaMiddleware } from "../../../../../../middlewares";
import { CheffFoodPlatesSchema } from "../../../../../../schemas/Cheffs";

const cheffFoodPlatesRoutes = Router();

cheffFoodPlatesRoutes.post(
  "/",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CheffFoodPlatesSchema.CreateBodySchema
  }),
  (req, res, next) => isAuthenticatedMiddleware.cheff.handle(req, res, next),
  (req, res) => cheffFoodPlatesController.create(req, res)
);

export { cheffFoodPlatesRoutes };
