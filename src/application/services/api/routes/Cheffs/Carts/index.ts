import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { cheffCartsController } from "../../../controllers/Cheffs/Carts";

const cheffCartsRoutes = Router();

/**
 * @swagger
 * /cheffs/carts:
 *   get:
 *     description: Get all carts
 *     tags:
 *       - CheffCart
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
 *     tags:
 *       - CheffCart
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
