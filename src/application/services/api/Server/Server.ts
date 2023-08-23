import express from "express";
import cors from "cors";
import "express-async-errors";
import { errorHandler } from "../handlers";
import { environment } from "../../../environment";
import { routes } from "../routes";
import swaggerUi from "swagger-ui-express";
import swaggerJson from "../config/swagger.json";

const { NODE_ENV, API_PORT, DOMAIN } = environment;

class Server {
  private readonly app: express.Application = express();
  private readonly port = +API_PORT;
  private readonly domain = DOMAIN;

  constructor() {
    this.useConfig();
    this.useRoutes();
    this.useHandlers();
  }

  private useConfig(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private useRoutes(): void {
    if (NODE_ENV === "development") {
      this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));
    }

    this.app.use("/", routes);
  }

  private useHandlers(): void {
    this.app.use(errorHandler);
  }

  public init() {
    this.app.listen(this.port, async () => {
      console.log(`API is running on: ${this.domain}`);

      if (NODE_ENV === "development") {
        console.log(`API docs is running on: ${this.domain}/docs`);
      }
    });
  }
}

export { Server };
