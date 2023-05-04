import { Router } from "express";
import { validateSchemaMiddleware } from "../../../../../middlewares";
import { adminController } from "../../controllers/Admin";
import { AdminSchema } from "../../../../../schemas/Admin";

const adminRoutes = Router();

adminRoutes.post(
  "/sign-in",
  validateSchemaMiddleware.handle({
    type: "body",
    schema: AdminSchema.SignInBodySchema
  }),
  (req, res) => adminController.signIn(req, res)
);

export { adminRoutes };
