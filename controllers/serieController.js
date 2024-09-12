// Importa o serviço de séries e a função ObjectId do MongoDB para validação de IDs
import serieService from "../services/serieService.js"; 
import { ObjectId } from "mongodb";

// Função para buscar todas as séries
const getAllSeries = async (req, res) => {
  try {
    // Chama o serviço para buscar todas as séries no banco de dados
    const series = await serieService.getAll();
    // Responde com status 200 e as séries no formato JSON
    res.status(200).json({ series: series });
  } catch (error) {
    // Log de erro no servidor
    console.log(error);
    // Responde com status 500 em caso de erro interno no servidor
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

// Função para criar uma nova série
const createSerie = async (req, res) => {
  try {
    // Extrai os dados do corpo da requisição (req.body)
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

    // Chama o serviço para criar a série com os dados fornecidos
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
      revenue
    );

    // Responde com status 201 (criado com sucesso)
    res.sendStatus(201);
  } catch (error) {
    // Log de erro no servidor
    console.log(error);
    // Responde com status 500 em caso de erro interno no servidor
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

// Função para deletar uma série
const deleteSerie = async (req, res) => {
  try {
    // Verifica se o ID passado na URL é válido usando ObjectId.isValid()
    if (ObjectId.isValid(req.params.id)) {
      // Obtém o ID da série da URL
      const id = req.params.id;
      // Chama o serviço para deletar a série pelo ID
      serieService.Delete(id);
      // Responde com status 204 (sem conteúdo) após a exclusão
      res.sendStatus(204);
    } else {
      // Responde com status 400 (requisição malformada) se o ID não for válido
      res.sendStatus(400);
    }
  } catch (error) {
    // Log de erro no servidor
    console.log(error);
    // Responde com status 500 em caso de erro interno no servidor
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

// Função para atualizar uma série existente
const UpdateSerie = async (req, res) => {
  try {
    // Verifica se o ID passado na URL é válido usando ObjectId.isValid()
    if (ObjectId.isValid(req.params.id)) {
      // Obtém o ID da série da URL
      const id = req.params.id;

      // Extrai os dados do corpo da requisição (req.body) para atualização
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

      // Chama o serviço para atualizar a série com base no ID e nos novos dados
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
    // Responde com status 500 em caso de erro interno no servidor
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

// Função para buscar uma série específica pelo imdb_id
const getOneSerie = async (req, res) => {
  try {
    // Obtém o imdb_id dos parâmetros da URL
    const imdb_id = req.params.imdb_id;
    // Busca a série com base no imdb_id
    const serie = await serieService.getOne(imdb_id);
    
    // Se a série não for encontrada, responde com status 404 (não encontrado)
    if (!serie) {
      res.sendStatus(404);
    } else {
      // Se encontrada, responde com status 200 e os dados da série no formato JSON
      res.status(200).json({ serie });
    }
  } catch (error) {
    // Log de erro no servidor
    console.log(error);
    // Responde com status 500 em caso de erro interno no servidor
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

// Exporta todas as funções para serem utilizadas nas rotas do servidor
export default {
  getAllSeries,
  createSerie,
  deleteSerie,
  UpdateSerie,
  getOneSerie,
};
