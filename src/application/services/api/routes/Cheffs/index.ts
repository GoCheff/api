import { Router } from "express";
import { validateSchemaMiddleware } from "../../../../../middlewares";
import { CheffsSchema } from "../../../../../schemas/Cheffs";
import { cheffsController } from "../../controllers/Cheffs";
import { cheffFoodPlatesRoutes } from "./FoodPlates";
import { cheffCartsRoutes } from "./Carts";
import { isAuthenticatedMiddleware } from "../../../../../middlewares/IsAuthenticated";

const cheffsRoutes = Router();

/**
 * @swagger
 * /cheffs/request-registration:
 *   post:
 *     tags:
 *       - Cheff
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CheffRequestRegistrationBodySchema'
 *     responses:
 *       201:
 *         description: Cheff registration requested successfully
 *       422:
 *         description: Cheff already exists
 */
cheffsRoutes.post(
  "/request-registration",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CheffsSchema.RequestRegistrationBodySchema
  }),
  (req, res) => cheffsController.requestRegistration(req, res)
);

/**
 * @swagger
 * /cheffs/sign-in:
 *   post:
 *     description: Sign in as cheff
 *     tags:
 *       - Cheff
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CheffSignInBodySchema'
 *     responses:
 *       200:
 *         description: Cheff signed in
 *       404:
 *         description: Cheff not found or password does not match
 */
cheffsRoutes.post(
  "/sign-in",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CheffsSchema.SignInBodySchema
  }),
  (req, res) => cheffsController.signIn(req, res)
);

cheffsRoutes.get(
  "/auth",
  (req, res, next) => isAuthenticatedMiddleware.cheff.handle(req, res, next),
  (req, res) => cheffsController.auth(req, res)
);

cheffsRoutes.use("/carts", cheffCartsRoutes);
cheffsRoutes.use("/food-plates", cheffFoodPlatesRoutes);

export { cheffsRoutes };
