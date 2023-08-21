import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { customerCartsController } from "../../../controllers/Customers/Carts";

const customerCartsRoutes = Router();

customerCartsRoutes.get(
  "/",
  (req, res, next) => isAuthenticatedMiddleware.customer.handle(req, res, next),
  (req, res) => customerCartsController.get(req, res)
);

customerCartsRoutes.patch(
  "/:id",
  (req, res, next) => isAuthenticatedMiddleware.customer.handle(req, res, next),
  (req, res) => customerCartsController.patch(req, res)
);

export { customerCartsRoutes };
