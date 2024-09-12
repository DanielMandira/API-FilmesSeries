// Importa o Express para criar as rotas e o controller de filmes
import express from "express";
import movieController from "../controllers/movieController.js";


// Cria uma instância de roteador do Express
const movieRoutes = express.Router();

// Define uma rota GET para buscar todos os filmes e Series
// Quando o cliente acessa "/", o controlador chama a função getAll
movieRoutes.get("/", movieController.getAll)

// Define uma rota GET para buscar todos os filmes
// Quando o cliente acessa "/movies", o controlador chama a função getAllMovies
movieRoutes.get("/movies", movieController.getAllMovies);

// Define uma rota POST para criar um novo filme
// Quando o cliente envia dados para "/movie", o controlador chama a função createMovie
movieRoutes.post("/movie", movieController.createMovie);

// Define uma rota DELETE para deletar um filme pelo ID
// O ID do filme é passado como parte da URL "/movie/:id", e o controlador chama a função deleteMovie
movieRoutes.delete("/movie/:id", movieController.deleteMovie);

// Define uma rota PUT para atualizar um filme pelo ID
// O ID do filme é passado como parte da URL "/movie/:id", e o controlador chama a função UpdateMovie
movieRoutes.put("/movie/:id", movieController.UpdateMovie);

// Define uma rota GET para buscar um filme específico pelo IMDb ID
// O imdb_id é passado como parte da URL "/movie/:imdb_id", e o controlador chama a função getOneMovie
movieRoutes.get("/movie/:imdb_id", movieController.getOneMovie);

// Exporta as rotas para serem usadas no aplicativo principal do Express
export default movieRoutes;
