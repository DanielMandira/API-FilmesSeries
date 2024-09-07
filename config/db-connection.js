import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbPass = process.env.DB_PASS;
 
const connect = () => {
  mongoose.connect(`mongodb+srv://mandiradaniel:${dbPass}@auladw3.qpo0l.mongodb.net/rutocaflix?retryWrites=true&w=majority&appName=AulaDW3`);
};

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Erro ao conectar com MongoDB");
});

connection.on("open", () => {
  console.log("Conectado ao MongoDB com sucesso");
});

connect();

export default mongoose;
