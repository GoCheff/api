import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { cheffCartsController } from "../../../controllers/Cheffs/Carts";

const cheffCartsRoutes = Router();

cheffCartsRoutes.get(
  "/",
  (req, res, next) => isAuthenticatedMiddleware.cheff.handle(req, res, next),
  (req, res) => cheffCartsController.get(req, res)
);

cheffCartsRoutes.get(
  "/sent",
  (req, res, next) => isAuthenticatedMiddleware.cheff.handle(req, res, next),
  (req, res) => cheffCartsController.getAllSent(req, res)
);

cheffCartsRoutes.patch(
  "/:id/approve",
  (req, res, next) => isAuthenticatedMiddleware.cheff.handle(req, res, next),
  (req, res) => cheffCartsController.approve(req, res)
);

cheffCartsRoutes.patch(
  "/:id/refuse",
  (req, res, next) => isAuthenticatedMiddleware.cheff.handle(req, res, next),
  (req, res) => cheffCartsController.refuse(req, res)
);

export { cheffCartsRoutes };
