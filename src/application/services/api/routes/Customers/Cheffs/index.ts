import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { customerCheffsController } from "../../../controllers/Customers";

const customerCheffsRoutes = Router();

customerCheffsRoutes.get(
  "/:id",
  (req, res, next) => isAuthenticatedMiddleware.customer.handle(req, res, next),
  (req, res) => customerCheffsController.get(req, res)
);

export { customerCheffsRoutes };
