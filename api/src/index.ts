import dotenv from "dotenv";
import { App } from "./app.js";
import { MongoDB } from "./config/MongoConnect.js";

const mongo = new MongoDB();
const app = new App();

dotenv.config();
mongo.connect();
app.start();
