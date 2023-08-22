import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { customerCheffsController } from "../../../controllers/Customers";
import { validateSchemaMiddleware } from "../../../../../../middlewares";
import { CustomerCheffsSchema } from "../../../../../../schemas/Customers/Cheffs";

const customerCheffsRoutes = Router();

customerCheffsRoutes.get(
  "/",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CustomerCheffsSchema.GetAllQuerySchema
  }),
  (req, res, next) => isAuthenticatedMiddleware.customer.handle(req, res, next),
  (req, res) => customerCheffsController.getAll(req, res)
);

customerCheffsRoutes.get(
  "/:id",
  (req, res, next) => isAuthenticatedMiddleware.customer.handle(req, res, next),
  (req, res) => customerCheffsController.get(req, res)
);

export { customerCheffsRoutes };
