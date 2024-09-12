// Importa o modelo de séries definido no arquivo "Series.js"
import Serie from "../models/Series.js";

// Define a classe de serviço para lidar com operações relacionadas ao modelo de séries
class serieService {
  // Método assíncrono para buscar todas as séries do banco de dados
  async getAll() {
    try {
      // Utiliza o método "find" do Mongoose para obter todos os documentos da coleção de séries
      const series = await Serie.find();
      return series; // Retorna a lista de séries
    } catch (error) {
      // Em caso de erro, exibe o erro no console
      console.log(error);
    }
  }

  // Método assíncrono para criar uma nova série no banco de dados
  async Create(
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
    revenue
  ) {
    try {
      // Cria uma nova instância do modelo "Serie" com os dados fornecidos
      const newSerie = new Serie({
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
      });
      // Salva a nova série no banco de dados
      await newSerie.save();
    } catch (error) {
      // Em caso de erro, exibe o erro no console
      console.log(error);
    }
  }

  // Método assíncrono para deletar uma série com base no ID fornecido
  async Delete(id) {
    try {
      // Utiliza o método "findByIdAndDelete" do Mongoose para deletar a série pelo ID
      await Serie.findByIdAndDelete(id);
      console.log(`Serie com id ${id} Deletado com sucesso!`); // Mensagem de sucesso no console
    } catch (error) {
      // Em caso de erro, exibe o erro no console
      console.log(error);
    }
  }

  // Método assíncrono para atualizar uma série existente no banco de dados
  async Update(
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
    revenue
  ) {
    try {
      // Utiliza o método "findByIdAndUpdate" para encontrar a série pelo ID e atualizar seus dados
      await Serie.findByIdAndUpdate(id, {
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
      });
      console.log(`Serie com id ${id} alterado com sucesso!`); // Mensagem de sucesso no console
    } catch (error) {
      // Em caso de erro, exibe o erro no console
      console.log(error);
    }
  }

  // Método assíncrono para buscar uma única série no banco de dados com base no ID do IMDb
  async getOne(imdb_id) {
    try {
      // Utiliza o método "findOne" para buscar uma série com o imdb_id fornecido
      const serie = await Serie.findOne({ imdb_id: imdb_id });
      return serie; // Retorna a série encontrada
    } catch (error) {
      // Em caso de erro, exibe o erro no console
      console.log(error);
    }
  }
}

// Exporta uma nova instância da classe "serieService" para ser usada em outras partes da aplicação
export default new serieService();
