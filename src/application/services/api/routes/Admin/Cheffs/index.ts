import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { adminCheffsController } from "../../../controllers/Admin/Cheffs";
import { validateSchemaMiddleware } from "../../../../../../middlewares";
import { AdminCheffsSchema } from "../../../../../../schemas/Admin";

const adminCheffsRoutes = Router();

/**
 * @swagger
 * /admin/cheffs/pending:
 *   post:
 *     description: Get all pending cheffs
 *     tags:
 *       - AdminCheff
 *     responses:
 *       200:
 *         description: All pending cheffs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cheff'
 */
adminCheffsRoutes.get(
  "/pending",
  (req, res, next) => isAuthenticatedMiddleware.admin.handle(req, res, next),
  (req, res) => adminCheffsController.getAllPending(req, res)
);

adminCheffsRoutes.get(
  "/approved",
  (req, res, next) => isAuthenticatedMiddleware.admin.handle(req, res, next),
  (req, res) => adminCheffsController.getAllApproved(req, res)
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

adminCheffsRoutes.patch(
  "/refuse/:id",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: AdminCheffsSchema.RefuseBodySchema
  }),
  (req, res, next) => isAuthenticatedMiddleware.admin.handle(req, res, next),
  (req, res) => adminCheffsController.refuse(req, res)
);

export { adminCheffsRoutes };
