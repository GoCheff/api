import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { customerCheffsController } from "../../../controllers/Customers";
import { validateSchemaMiddleware } from "../../../../../../middlewares";
import { CustomerCheffsSchema } from "../../../../../../schemas/Customers/Cheffs";

const customerCheffsRoutes = Router();

/**
 * @swagger
 * /customers/cheffs:
 *   get:
 *     description: Get all cheffs
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Customer
 *     responses:
 *      200:
 *        description: Cheffs found
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              $ref: '#/components/schemas/Cheff'
 */
customerCheffsRoutes.get(
  "/",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CustomerCheffsSchema.GetAllQuerySchema
  }),
  (req, res, next) => isAuthenticatedMiddleware.customer.handle(req, res, next),
  (req, res) => customerCheffsController.getAll(req, res)
);

/**
 * @swagger
 * /customers/cheffs/{id}:
 *   get:
 *     description: Get cheff by id
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Customer
 *     parameters:
 *       - id:
 *         name: id
 *         description: Cheff id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *      200:
 *        description: Cheff found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Cheff'
 *      404:
 *        description: Cheff or admin not found
 */
customerCheffsRoutes.get(
  "/:id",
  (req, res, next) => isAuthenticatedMiddleware.customer.handle(req, res, next),
  (req, res) => customerCheffsController.get(req, res)
);

export { customerCheffsRoutes };
