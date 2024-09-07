// importação do modelo de filmes
import Movie from "../models/Movie.js";

class movieSvice {
  async getAll() {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.log(error);
    }
  }

  async Create(
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
  ) {
    try {
      const newMovie = new Movie({
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
      });
      await newMovie.save();
    } catch (error) {
      console.log(error);
    }
  }

  async Delete(id) {
    try {
      await Movie.findByIdAndDelete(id);
      console.log(`Filme com id ${id} Deletado com sucesso!`);
    } catch (error) {
      console.log(error);
    }
  }

  async Update(
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
  ) {
    try {
      await Movie.findByIdAndUpdate(id, {
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
      });
      console.log(`Filme com id ${id} alterado com sucesso!`);
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id) {
    try {
      const movie = await Movie.findOne({ _id: id });
      return movie;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new movieSvice();
