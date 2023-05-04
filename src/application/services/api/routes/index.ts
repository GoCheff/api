import { Router } from "express";
import { customersRoutes } from "./Customers";
import { responseHandler } from "../handlers";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("GoCheff API");
});

routes.use("/customers", customersRoutes);

routes.use("/*", (req, res) => {
  const message = "Route not found";
  const statusCode = 404;

  res.status(statusCode).json(
    responseHandler({
      message,
      statusCode
    })
  );
});

export { routes };
