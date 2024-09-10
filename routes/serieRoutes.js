import express from "express"
import serieController from "../controllers/serieController.js"

const serieRoutes = express.Router()

serieRoutes.get("/series", serieController.getAllSeries)

serieRoutes.post("/serie", serieController.createSerie)

serieRoutes.delete("/serie/:id", serieController.deleteSerie)

serieRoutes.put("/serie/:id", serieController.UpdateSerie)

serieRoutes.get("/serie/:id", serieController.getOneSerie)

export default serieRoutes