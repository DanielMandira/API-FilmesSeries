// Importa o serviço de filmes e a função ObjectId do MongoDB para validação de IDs
import movieService from "../services/movieService.js";
import { ObjectId } from "mongodb";
import serieService from "../services/serieService.js";

// função para buscar todos os filmes e series
const getAll = async (req, res) => {
  try {
    // Chama o serviço para buscar todos os filmes no banco de dados
    const movies = await movieService.getAll();
    // Chama o serviço para buscar todas  as series no banco de dados
    const series = await serieService.getAll();
    // Responde com status 200 e os filmes e series no formato JSON
    res.status(200).json({ movies, series });
  } catch (error) {
    // Log de erro no servidor
    console.log(error);
    // Responde com status 500 em caso de erro interno
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

// Função para buscar todos os filmes
const getAllMovies = async (req, res) => {
  try {
    // Chama o serviço para buscar todos os filmes no banco de dados
    const movies = await movieService.getAll();
    // Responde com status 200 e os filmes no formato JSON
    res.status(200).json({ movies: movies });
  } catch (error) {
    // Log de erro no servidor
    console.log(error);
    // Responde com status 500 em caso de erro interno
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

// Função para criar um novo filme
const createMovie = async (req, res) => {
  try {
    // Extrai os dados do corpo da requisição (req.body)
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

    // Chama o serviço para criar o filme com os dados fornecidos
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

    // Responde com status 201 (criado com sucesso)
    res.sendStatus(201);
  } catch (error) {
    // Log de erro no servidor
    console.log(error);
    // Responde com status 500 em caso de erro interno
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

// Função para deletar um filme
const deleteMovie = async (req, res) => {
  try {
    // Verifica se o ID passado na URL é válido usando ObjectId.isValid()
    if (ObjectId.isValid(req.params.id)) {
      // Obtém o ID do filme da URL (req.params)
      const id = req.params.id;
      // Chama o serviço para deletar o filme pelo ID
      movieService.Delete(id);
      // Responde com status 204 (sem conteúdo) após a exclusão
      res.sendStatus(204);
    } else {
      // Responde com status 400 (requisição malformada) se o ID não for válido
      res.sendStatus(400);
    }
  } catch (error) {
    // Log de erro no servidor
    console.log(error);
    // Responde com status 500 em caso de erro interno
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

// Função para atualizar um filme existente
const UpdateMovie = async (req, res) => {
  try {
    // Verifica se o ID passado na URL é válido usando ObjectId.isValid()
    if (ObjectId.isValid(req.params.id)) {
      // Obtém o ID do filme da URL
      const id = req.params.id;

      // Extrai os dados do corpo da requisição (req.body) para atualização
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

      // Chama o serviço para atualizar o filme com base no ID e nos novos dados
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

      // Responde com status 200 (sucesso) após a atualização
      res.sendStatus(200);
    } else {
      // Responde com status 400 (requisição malformada) se o ID não for válido
      res.sendStatus(400);
    }
  } catch (error) {
    // Log de erro no servidor
    console.log(error);
    // Responde com status 500 em caso de erro interno
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

// Função para buscar um filme específico pelo imdb_id
const getOneMovie = async (req, res) => {
  try {
    // Obtém o imdb_id dos parâmetros da URL
    const imdb_id = req.params.imdb_id;
    // Busca o filme com base no imdb_id
    const movie = await movieService.getOne(imdb_id);

    // Se o filme não for encontrado, responde com status 404 (não encontrado)
    if (!movie) {
      res.sendStatus(404);
    } else {
      // Se encontrado, responde com status 200 e os dados do filme no formato JSON
      res.status(200).json({ movie });
    }
  } catch (error) {
    // Log de erro no servidor
    console.log(error);
    // Responde com status 500 em caso de erro interno
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

// Exporta todas as funções para serem utilizadas nas rotas do servidor
export default {
  getAll,
  getAllMovies,
  createMovie,
  deleteMovie,
  UpdateMovie,
  getOneMovie,
};
