import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { adminCheffsController } from "../../../controllers/Admin/Cheffs";

const adminCheffsRoutes = Router();

adminCheffsRoutes.get(
  "/pending",
  (req, res, next) => isAuthenticatedMiddleware.admin.handle(req, res, next),
  (req, res) => adminCheffsController.getAllPending(req, res)
);

export { adminCheffsRoutes };
