import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export class MongoDB {
  async connect() {
    try {
      const uri = process.env.MONGO_URL || "mongodb://localhost:27017/";
      const dbName = process.env.MONGO_DATABASE || "";

      if (!uri || !dbName) {
        throw new Error(
          "Variáveis de ambiente não configuradas corretamente para conexão com o MongoDB",
        );
      }

      mongoose.set("strictQuery", false);
      await mongoose.connect(uri, {
        dbName: process.env.MONGO_DATABASE,
      });      console.log("Conectado ao banco de dados com sucesso!");
    } catch (error) {
      throw new Error("Ocorreu um problema ao iniciar a conexão com o banco de dados");
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("Banco de dados desconectado com sucesso!");
    } catch (error) {
      console.log("Ocorreu um problema ao tentar desconectar o banco de dados");
    }
  }
}
