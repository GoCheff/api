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
 *         description: Admin signed in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/Admin'
 *                   description: Admin
 *                 token:
 *                   type: string
 *                   description: JWT token
 *       404:
 *         description: Admin not found or password does not match
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
