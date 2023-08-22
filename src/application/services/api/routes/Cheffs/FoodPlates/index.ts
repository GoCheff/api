import { Router } from "express";
import { cheffFoodPlatesController } from "../../../controllers/Cheffs";
import { isAuthenticatedMiddleware } from "../../../../../../middlewares/IsAuthenticated";
import { validateSchemaMiddleware } from "../../../../../../middlewares";
import { CheffFoodPlatesSchema } from "../../../../../../schemas/Cheffs";

const cheffFoodPlatesRoutes = Router();

/**
 * @swagger
 * /cheffs/food-plates:
 *   post:
 *     description: Create a new food plate
 *     security:
 *       - bearerAuth:
 *     tags:
 *       - CheffFoodPlate
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CheffFoodPlateCreateBodySchema'
 *     responses:
 *       201:
 *         description: Food plate created
 *       404:
 *         description: Cheff not found
 */
cheffFoodPlatesRoutes.post(
  "/",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CheffFoodPlatesSchema.CreateBodySchema
  }),
  (req, res, next) => isAuthenticatedMiddleware.cheff.handle(req, res, next),
  (req, res) => cheffFoodPlatesController.create(req, res)
);

export { cheffFoodPlatesRoutes };
