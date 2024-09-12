// Importa o Mongoose, uma biblioteca para modelagem de dados no MongoDB
import mongoose from "mongoose";

// Define o schema aninhado para as temporadas de uma série, com campos para temporada, número de episódios, data de lançamento, sinopse e caminho do poster
const seasonsSchema = new mongoose.Schema({
  season: Number,         // Número da temporada
  episodes: Number,       // Número de episódios na temporada
  realese_date: Date,     // Data de lançamento da temporada (observação: "realese" deveria ser "release")
  sinopse: String,        // Sinopse da temporada
  poster_path: String,    // Caminho para a imagem do poster da temporada
});

// Define o schema principal para as séries
const serieSchema = new mongoose.Schema({
  imdb_id: String,                 // ID da série no IMDb
  title: String,                   // Título da série
  original_title: String,          // Título original da série
  adult: Boolean,                  // Indica se a série é para adultos
  genres: [String],                // Array de gêneros da série, como "Drama", "Comédia", etc.
  seasons: [seasonsSchema],        // Array de temporadas, utilizando o schema aninhado "seasonsSchema"
  origin_country: String,          // País de origem da série
  original_language: String,       // Idioma original da série
  poster_path: String,             // URL do poster da série
  producer: String,                // Nome do produtor da série
  budget: Number,                  // Orçamento da série em números
  revenue: Number,                 // Receita gerada pela série
});

// Cria o modelo "Serie" no Mongoose, associando o schema "serieSchema" ao nome da coleção no MongoDB
const Serie = mongoose.model("Serie", serieSchema);

// Exporta o modelo "Serie" para ser utilizado em outras partes da aplicação
export default Serie;
