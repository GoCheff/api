import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { adminCheffsController } from "../../../controllers/Admin/Cheffs";
import { validateSchemaMiddleware } from "../../../../../../middlewares";
import { AdminCheffsSchema } from "../../../../../../schemas/Admin";

const adminCheffsRoutes = Router();

adminCheffsRoutes.get(
  "/pending",
  (req, res, next) => isAuthenticatedMiddleware.admin.handle(req, res, next),
  (req, res) => adminCheffsController.getAllPending(req, res)
);

adminCheffsRoutes.patch(
  "/approve/:id",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: AdminCheffsSchema.ApproveBodySchema
  }),
  (req, res, next) => isAuthenticatedMiddleware.admin.handle(req, res, next),
  (req, res) => adminCheffsController.approve(req, res)
);

export { adminCheffsRoutes };
