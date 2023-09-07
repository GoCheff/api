import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { adminCheffsController } from "../../../controllers/Admin/Cheffs";

const adminCheffsRoutes = Router();

/**
 * @swagger
 * /admin/cheffs/pending:
 *   get:
 *     description: Get all pending cheffs
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Admin
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

/**
 * @swagger
 * /admin/cheffs/approved:
 *   get:
 *     description: Get all approved cheffs
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: All approved cheffs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cheff'
 */
adminCheffsRoutes.get(
  "/approved",
  (req, res, next) => isAuthenticatedMiddleware.admin.handle(req, res, next),
  (req, res) => adminCheffsController.getAllApproved(req, res)
);

/**
 * @swagger
 * /admin/cheffs/approve/{id}:
 *   patch:
 *     description: Approve cheff
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Admin
 *     parameters:
 *       - id:
 *         name: Cheff id
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: Cheff approved
 *       404:
 *         description: Cheff or admin not found
 *       422:
 *         description: Invalid admin password, cheff already approved or cheff already rejected
 */
adminCheffsRoutes.patch(
  "/approve/:id",
  (req, res, next) => isAuthenticatedMiddleware.admin.handle(req, res, next),
  (req, res) => adminCheffsController.approve(req, res)
);

/**
 * @swagger
 * /admin/cheffs/refuse/{id}:
 *   patch:
 *     description: Refuse cheff
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Admin
 *     parameters:
 *       - id:
 *         name: Cheff id
 *         in: path
 *         required: true
 *         type: number
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminCheffRefuseBodySchema'
 *       responses:
 *         200:
 *           description: Cheff refused
 *         404:
 *           description: Cheff or admin not found
 *         422:
 *           description: Invalid admin password, cheff already approved or cheff already rejected
 */
adminCheffsRoutes.patch(
  "/refuse/:id",
  (req, res, next) => isAuthenticatedMiddleware.admin.handle(req, res, next),
  (req, res) => adminCheffsController.refuse(req, res)
);

export { adminCheffsRoutes };
