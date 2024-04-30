import { App } from "./app.js";
import { MongoDB } from "./config/MongoConnect.js";

const mongo = new MongoDB();
const app = new App();

mongo.connect();
app.start();
