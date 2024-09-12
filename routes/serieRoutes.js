// Importa o Express para criar as rotas e o controlador de séries
import express from "express";
import serieController from "../controllers/serieController.js";

// Cria uma instância de roteador do Express
const serieRoutes = express.Router();

// Define uma rota GET para buscar todas as séries
// Quando o cliente acessa "/series", o controlador chama a função getAllSeries
serieRoutes.get("/series", serieController.getAllSeries);

// Define uma rota POST para criar uma nova série
// Quando o cliente envia dados para "/serie", o controlador chama a função createSerie
serieRoutes.post("/serie", serieController.createSerie);

// Define uma rota DELETE para deletar uma série pelo ID
// O ID da série é passado como parte da URL "/serie/:id", e o controlador chama a função deleteSerie
serieRoutes.delete("/serie/:id", serieController.deleteSerie);

// Define uma rota PUT para atualizar uma série pelo ID
// O ID da série é passado como parte da URL "/serie/:id", e o controlador chama a função UpdateSerie
serieRoutes.put("/serie/:id", serieController.UpdateSerie);

// Define uma rota GET para buscar uma série específica pelo IMDb ID
// O imdb_id é passado como parte da URL "/serie/:imdb_id", e o controlador chama a função getOneSerie
serieRoutes.get("/serie/:imdb_id", serieController.getOneSerie);

// Exporta as rotas para serem usadas no aplicativo principal do Express
export default serieRoutes;
