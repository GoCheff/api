import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { customerCheffsController } from "../../../controllers/Customers";

const customerCheffs = Router();

customerCheffs.get(
  "/:id",
  (req, res, next) => isAuthenticatedMiddleware.customer.handle(req, res, next),
  (req, res) => customerCheffsController.get(req, res)
);

export { customerCheffs };
