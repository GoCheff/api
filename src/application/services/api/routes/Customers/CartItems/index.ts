import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { customerCartItemsController } from "../../../controllers/Customers/CartItems";
import { validateSchemaMiddleware } from "../../../../../../middlewares";
import { CustomerCartItemsSchema } from "../../../../../../schemas/Customers";

const customerCartItemsRoutes = Router();

/**
 * @swagger
 * /customers/cart-items/{id}:
 *   put:
 *     description: Update or create a cart item
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Customer
 *     parameters:
 *       - id:
 *         name: Food plate id
 *         in: path
 *         required: true
 *         type: number
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CustomerCartItemsUpdateOrCreateBodySchema'
 *     responses:
 *       200:
 *         description: Cart item updated or created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Cart'
 *       400:
 *         description: Food plate from another cheff
 *       404:
 *         description: Food plate not found
 */
customerCartItemsRoutes.put(
  "/:id",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CustomerCartItemsSchema.UpdateOrCreateBodySchema
  }),
  (req, res, next) => isAuthenticatedMiddleware.customer.handle(req, res, next),
  (req, res) => customerCartItemsController.updateOrCreate(req, res)
);

export { customerCartItemsRoutes };
