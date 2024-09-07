import mongoose from "mongoose";

// modelo aninhado de elenco
const castSchema = new mongoose.Schema({
  actor: String,
  character: String,
});

// Modelo aninhado de titulo
const alternativeTitleSchema = new mongoose.Schema({
  county: String,
  title: String,
});

// modelo de filmes
const movieSchema = new mongoose.Schema({
  imdb_id: String,
  title: String,
  original_title: String,
  alternative_titles: [alternativeTitleSchema],
  adult: Boolean,
  // Estrutura usada para array de texto no mongoose
  genres: [String],
  synopsis: String,
  cast: [castSchema],
  origin_country: String,
  original_language: String,
  poster_path: String,
  release_date: Date,
  duration: String,
  producer: String,
  budget: Number,
  revenue: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
