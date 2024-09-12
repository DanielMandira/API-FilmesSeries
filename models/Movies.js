// Importa o Mongoose, que é uma biblioteca para modelar dados no MongoDB
import mongoose from "mongoose";

// Define o schema aninhado para o elenco de atores no filme, com campos de ator e personagem
const castSchema = new mongoose.Schema({
  actor: String,       // Nome do ator
  character: String,    // Nome do personagem interpretado pelo ator
});

// Define o schema aninhado para títulos alternativos, com campos para país e título
const alternativeTitleSchema = new mongoose.Schema({
  county: String,       // Nome do país onde o título alternativo é usado
  title: String,        // Título alternativo do filme
});

// Define o schema principal para os filmes
const movieSchema = new mongoose.Schema({
  imdb_id: String,                 // ID do filme no IMDb
  title: String,                   // Título do filme
  original_title: String,          // Título original do filme
  alternative_titles: [alternativeTitleSchema], // Array de títulos alternativos, utilizando o schema aninhado "alternativeTitleSchema"
  adult: Boolean,                  // Indica se o filme é para adultos
  genres: [String],                // Array de gêneros do filme, como "Ação", "Comédia", etc.
  synopsis: String,                // Sinopse do filme
  cast: [castSchema],              // Array de elenco, utilizando o schema aninhado "castSchema"
  origin_country: String,          // País de origem do filme
  original_language: String,       // Idioma original do filme
  poster_path: String,             // URL do poster do filme
  release_date: Date,              // Data de lançamento do filme
  duration: String,                // Duração do filme
  producer: String,                // Nome do produtor do filme
  budget: Number,                  // Orçamento do filme em números
  revenue: Number,                 // Receita gerada pelo filme
});

// Cria o modelo "Movie" no Mongoose, associando o schema "movieSchema" ao nome da coleção no MongoDB
const Movie = mongoose.model("Movie", movieSchema);

// Exporta o modelo "Movie" para ser utilizado em outras partes da aplicação
export default Movie;
