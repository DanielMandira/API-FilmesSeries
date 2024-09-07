import movieService from "../services/movieService.js";
import { ObjectId } from "mongodb";

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    res.status(200).json({ movies: movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

const createMovie = async (req, res) => {
  try {
    const {
      imdb_id,
      title,
      original_title,
      alternative_titles,
      adult,
      genres,
      synopsis,
      cast,
      origin_country,
      original_language,
      poster_path,
      release_date,
      duration,
      producer,
      budget,
      revenue,
    } = req.body;
    await movieService.Create(
      imdb_id,
      title,
      original_title,
      alternative_titles,
      adult,
      genres,
      synopsis,
      cast,
      origin_country,
      original_language,
      poster_path,
      release_date,
      duration,
      producer,
      budget,
      revenue
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

const deleteMovie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      movieService.Delete(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

const UpdateMovie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const {
        imdb_id,
        title,
        original_title,
        alternative_titles,
        adult,
        genres,
        synopsis,
        cast,
        origin_country,
        original_language,
        poster_path,
        release_date,
        duration,
        producer,
        budget,
        revenue,
      } = req.body;
      await movieService.Update(
        id,
        imdb_id,
        title,
        original_title,
        alternative_titles,
        adult,
        genres,
        synopsis,
        cast,
        origin_country,
        original_language,
        poster_path,
        release_date,
        duration,
        producer,
        budget,
        revenue
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

const getOneMovie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const movie = await movieService.getOne(id);
      if (!movie) {
        res.sendStatus(404);
      } else {
        res.status(200).json({ movie });
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
  getAllMovies,
  createMovie,
  deleteMovie,
  UpdateMovie,
  getOneMovie,
};
