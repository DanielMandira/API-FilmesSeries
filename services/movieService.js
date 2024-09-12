// Importa o modelo de filmes definido no arquivo "Movies.js"
import Movie from "../models/Movies.js";

// Define a classe de serviço para lidar com operações relacionadas ao modelo de filmes
class movieSvice {
  // Método assíncrono para buscar todos os filmes do banco de dados
  async getAll() {
    try {
      // Utiliza o método "find" do Mongoose para obter todos os documentos da coleção de filmes
      const movies = await Movie.find();
      return movies; // Retorna a lista de filmes
    } catch (error) {
      // Em caso de erro, exibe o erro no console
      console.log(error);
    }
  }

  // Método assíncrono para criar um novo filme no banco de dados
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
      // Cria uma nova instância do modelo "Movie" com os dados fornecidos
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
      // Salva o novo filme no banco de dados
      await newMovie.save();
    } catch (error) {
      // Em caso de erro, exibe o erro no console
      console.log(error);
    }
  }

  // Método assíncrono para deletar um filme com base no ID fornecido
  async Delete(id) {
    try {
      // Utiliza o método "findByIdAndDelete" do Mongoose para deletar o filme pelo ID
      await Movie.findByIdAndDelete(id);
      console.log(`Filme com id ${id} Deletado com sucesso!`); // Mensagem de sucesso no console
    } catch (error) {
      // Em caso de erro, exibe o erro no console
      console.log(error);
    }
  }

  // Método assíncrono para atualizar um filme existente no banco de dados
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
      // Utiliza o método "findByIdAndUpdate" para encontrar o filme pelo ID e atualizar seus dados
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
      console.log(`Filme com id ${id} alterado com sucesso!`); // Mensagem de sucesso no console
    } catch (error) {
      // Em caso de erro, exibe o erro no console
      console.log(error);
    }
  }

  // Método assíncrono para buscar um único filme no banco de dados com base no ID do IMDb
  async getOne(imdb_id) {
    try {
      // Utiliza o método "findOne" para buscar um filme com o imdb_id fornecido
      const movie = await Movie.findOne({ imdb_id: imdb_id });
      return movie; // Retorna o filme encontrado
    } catch (error) {
      // Em caso de erro, exibe o erro no console
      console.log(error);
    }
  }
}

// Exporta uma nova instância da classe "movieSvice" para ser usada em outras partes da aplicação
export default new movieSvice();
