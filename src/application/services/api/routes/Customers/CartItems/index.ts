import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { customerCartItemsController } from "../../../controllers/Customers/CartItems";

const customerCartItemsRoutes = Router();

customerCartItemsRoutes.put(
  "/:id",
  (req, res, next) => isAuthenticatedMiddleware.customer.handle(req, res, next),
  (req, res) => customerCartItemsController.updateOrCreate(req, res)
);

export { customerCartItemsRoutes };
