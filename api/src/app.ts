import { router } from "./modules/payment/routes/router.js";
import cors from "cors";
import express from "express";

export class App {
  private express: express.Express;
  private port?: string;
  private environment?: string;

  get getExpress(): express.Express {
    return this.express;
  }

  constructor() {
    this.express = express();
    this.setVariables();
    this.middlewares();
    this.routes();
  }

  private setVariables() {
    this.port = process.env.PORT ?? "3001";
    this.environment = process.env.NODE_ENV ?? "development";
    this.express.set("port", this.port);
    this.express.set("env", this.environment);
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes() {
    this.express.use(router);
  }

  start() {
    try {
      this.express.listen(this.port, () => {
        console.log(`Servidor conectado com sucesso na porta: ${this.express.get("port")}`);
      });
    } catch (error) {
      console.log("Ocorreu um problema ao iniciar o servidor");
      console.log(error);
    }
  }
}
