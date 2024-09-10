import serieService from "../services/serieService.js"; 
import { ObjectId } from "mongodb";

const getAllSeries = async (req, res) => {
  try {
    const series = await serieService.getAll();
    res.status(200).json({ series: series });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

const createSerie = async (req, res) => {
  try {
    const {
        imdb_id,
        title,
        original_title,
        adult,
        genres,
        seasons,
        origin_country,
        original_language,
        poster_path,
        producer,
        budget,
        revenue,
    } = req.body;
    await serieService.Create(
        imdb_id,
        title,
        original_title,
        adult,
        genres,
        seasons,
        origin_country,
        original_language,
        poster_path,
        producer,
        budget,
        revenue,
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

const deleteSerie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      serieService.Delete(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

const UpdateSerie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const {
        imdb_id,
        title,
        original_title,
        adult,
        genres,
        seasons,
        origin_country,
        original_language,
        poster_path,
        producer,
        budget,
        revenue,
      } = req.body;
      await serieService.Update(
        id,
        imdb_id,
        title,
        original_title,
        adult,
        genres,
        seasons,
        origin_country,
        original_language,
        poster_path,
        producer,
        budget,
        revenue,
      );
      res.sendStatus(200);
    } else {
      res.sendStatus(400); //Código 400 - BAD REQUEST
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

const getOneSerie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const serie = await serieService.getOne(id);
      if (!serie) {
        res.sendStatus(404);
      } else {
        res.status(200).json({ serie });
      }
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

export default {
  getAllSeries,
  createSerie,
  deleteSerie,
  UpdateSerie,
  getOneSerie,
};
