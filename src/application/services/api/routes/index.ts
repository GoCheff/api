import { Router } from "express";
import { NotFoundError } from "../../../../errors/NotFoundError";
import { customersRoutes } from "./Customers";
import { adminRoutes } from "./Admin";
import { cheffsRoutes } from "./Cheffs";

const routes = Router();

/**
 * @swagger
 * /:
 *   get:
 *     description: GoCheff API
 *     tags:
 *       - 'Config'
 *     responses:
 *       200:
 *         description: Returns a message with the API name
 */
routes.get("/", (req, res) => {
  res.send("GoCheff API");
});

routes.use("/admin", adminRoutes);
routes.use("/cheffs", cheffsRoutes);
routes.use("/customers", customersRoutes);

routes.use("/*", () => {
  throw new NotFoundError("Route not found");
});

export { routes };
