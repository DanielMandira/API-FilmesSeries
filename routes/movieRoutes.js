import express from "express"
import movieController from "../controllers/movieController.js"

const movieRoutes = express.Router()

movieRoutes.get("/movies", movieController.getAllMovies)

movieRoutes.post("/movie", movieController.createMovie)

movieRoutes.delete("/movie/:id", movieController.deleteMovie)

movieRoutes.put("/movie/:id", movieController.UpdateMovie)

movieRoutes.get("/movie/:id", movieController.getOneMovie)

export default movieRoutes