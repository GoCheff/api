import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { cheffCartsController } from "../../../controllers/Cheffs/Carts";

const cheffCartsRoutes = Router();

/**
 * @swagger
 * /cheffs/carts:
 *   get:
 *     description: Get all carts
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Cheff
 *     responses:
 *       200:
 *         description: All carts with cheff food plates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 */
cheffCartsRoutes.get(
  "/",
  (req, res, next) => isAuthenticatedMiddleware.cheff.handle(req, res, next),
  (req, res) => cheffCartsController.get(req, res)
);

/**
 * @swagger
 * /cheffs/carts/sent:
 *   get:
 *     description: Get all carts sent
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Cheff
 *     responses:
 *       200:
 *         description: All carts with cheff food plates sent
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 */
cheffCartsRoutes.get(
  "/sent",
  (req, res, next) => isAuthenticatedMiddleware.cheff.handle(req, res, next),
  (req, res) => cheffCartsController.getAllSent(req, res)
);

/**
 * @swagger
 * /cheffs/carts/{id}/approve:
 *   patch:
 *     description: Approve a cart
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Cheff
 *     responses:
 *       200:
 *         description: Cart approved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       404:
 *         description: Cart not found
 *       409:
 *         description: Cart is not sent
 */
cheffCartsRoutes.patch(
  "/:id/approve",
  (req, res, next) => isAuthenticatedMiddleware.cheff.handle(req, res, next),
  (req, res) => cheffCartsController.approve(req, res)
);

/**
 * @swagger
 * /cheffs/carts/{id}/refuse:
 *   patch:
 *     description: Refuse a cart
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Cheff
 *     responses:
 *       200:
 *         description: Cart refused
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       404:
 *         description: Cart not found
 *       409:
 *         description: Cart is not sent
 */
cheffCartsRoutes.patch(
  "/:id/refuse",
  (req, res, next) => isAuthenticatedMiddleware.cheff.handle(req, res, next),
  (req, res) => cheffCartsController.refuse(req, res)
);

export { cheffCartsRoutes };
