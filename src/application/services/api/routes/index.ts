import { Router } from "express";
import { customersRoutes } from "./Customers";
import { NotFoundError } from "../../../../errors/NotFoundError";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("GoCheff API");
});

routes.use("/customers", customersRoutes);

routes.use("/*", () => {
  throw new NotFoundError("Route not found");
});

export { routes };
