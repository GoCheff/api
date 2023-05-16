import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { cheffCartsController } from "../../../controllers/Cheffs/Carts";

const cheffCartsRoutes = Router();

cheffCartsRoutes.get(
  "/",
  (req, res, next) => isAuthenticatedMiddleware.cheff.handle(req, res, next),
  (req, res) => cheffCartsController.get(req, res)
);

export { cheffCartsRoutes };
