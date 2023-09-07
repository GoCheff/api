import { Router } from "express";
import { validateSchemaMiddleware } from "../../../../../middlewares";
import { CustomersSchema } from "../../../../../schemas/Customers";
import { customersController } from "../../controllers/Customers";
import { customerCheffsRoutes } from "./Cheffs";
import { customerCartItemsRoutes } from "./CartItems";
import { customerCartsRoutes } from "./Carts";
import { isAuthenticatedMiddleware } from "../../../../../middlewares/IsAuthenticated";

const customersRoutes = Router();

/**
 * @swagger
 * /customers/sign-up:
 *   post:
 *     description: Sign up as customer
 *     tags:
 *       - Customer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CustomerSignUpBodySchema'
 *     responses:
 *       201:
 *         description: Customer signed up
 *       422:
 *         description: Email already in use
 */
customersRoutes.post(
  "/sign-up",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CustomersSchema.SignUpBodySchema
  }),
  (req, res) => customersController.signUp(req, res)
);

/**
 * @swagger
 * /customers/sign-in:
 *   post:
 *     description: Sign in as customer
 *     tags:
 *       - Customer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CustomerSignInBodySchema'
 *     responses:
 *       200:
 *         description: Customer signed in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/Customer'
 *                   description: Customer
 *                 token:
 *                   type: string
 *                   description: JWT token
 *       404:
 *         description: Customer not found or password does not match
 */
customersRoutes.post(
  "/sign-in",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CustomersSchema.SignInBodySchema
  }),
  (req, res) => customersController.signIn(req, res)
);

/**
 * @swagger
 * /customers/auth:
 *   get:
 *     description: Authenticate as customer
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Customer
 *     responses:
 *       200:
 *         description: Authenticated as customer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Customer'
 *       401:
 *         description: Unauthorized
 */
customersRoutes.get(
  "/auth",
  (req, res, next) => isAuthenticatedMiddleware.customer.handle(req, res, next),
  (req, res) => customersController.auth(req, res)
);

customersRoutes.use("/cheffs", customerCheffsRoutes);
customersRoutes.use("/carts", customerCartsRoutes);
customersRoutes.use("/cart-items", customerCartItemsRoutes);

export { customersRoutes };
