import { Router } from "express";
import { validateSchemaMiddleware } from "../../../../../middlewares";
import { adminController } from "../../controllers/Admin";
import { AdminSchema } from "../../../../../schemas/Admin";
import { adminCheffsRoutes } from "./Cheffs";

const adminRoutes = Router();

/**
 * @swagger
 * /admin/sign-in:
 *   post:
 *     description: Sign in as admin
 *     tags:
 *       - Admin
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminSignInBodySchema'
 *     responses:
 *       200:
 *         description: Returns a message with the API name
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 */
adminRoutes.post(
  "/sign-in",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: AdminSchema.SignInBodySchema
  }),
  (req, res) => adminController.signIn(req, res)
);

adminRoutes.use("/cheffs", adminCheffsRoutes);

export { adminRoutes };
