import { Router } from "express";
import { NotFoundError } from "../../../../errors/NotFoundError";
import { customersRoutes } from "./Customers";
import { adminRoutes } from "./Admin";
import { cheffsRoutes } from "./Cheffs";

const routes = Router();

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
