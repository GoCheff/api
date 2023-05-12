import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { customerCartItemsController } from "../../../controllers/Customers/CartItems";
import { validateSchemaMiddleware } from "../../../../../../middlewares";
import { CustomerCartItemsSchema } from "../../../../../../schemas/Customers";

const customerCartItemsRoutes = Router();

customerCartItemsRoutes.put(
  "/:id",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CustomerCartItemsSchema.UpdateOrCreateBodySchema
  }),
  (req, res, next) => isAuthenticatedMiddleware.customer.handle(req, res, next),
  (req, res) => customerCartItemsController.updateOrCreate(req, res)
);

export { customerCartItemsRoutes };
