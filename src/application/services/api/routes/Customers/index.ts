import { Router } from "express";
import { validateSchemaMiddleware } from "../../../../../middlewares";
import { CustomersSchema } from "../../../../../schemas/Customers";
import { customersController } from "../../controllers/Customers";
import { customerCheffsRoutes } from "./Cheffs";
import { customerCartItemsRoutes } from "./CartItems";
import { customerCartsRoutes } from "./Carts";

const customersRoutes = Router();

customersRoutes.post(
  "/sign-up",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CustomersSchema.SignUpBodySchema
  }),
  (req, res) => customersController.signUp(req, res)
);

customersRoutes.post(
  "/sign-in",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: CustomersSchema.SignInBodySchema
  }),
  (req, res) => customersController.signIn(req, res)
);

customersRoutes.use("/cheffs", customerCheffsRoutes);

customersRoutes.use("/carts", customerCartsRoutes);

customersRoutes.use("/cart-items", customerCartItemsRoutes);

export { customersRoutes };
