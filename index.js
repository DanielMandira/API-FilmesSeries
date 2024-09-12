// Importa o framework Express, que facilita a criação de servidores web
import express from "express";
// Importa a conexão com o banco de dados MongoDB configurado no arquivo "db-connection.js"
import mongoose from "./config/db-connection.js";
// Importa o model "Movie" que define a estrutura do documento de filmes no MongoDB
import Movie from "./models/Movies.js";
// Importa o model "Serie" que define a estrutura do documento de séries no MongoDB
import Serie from "./models/Series.js";
// Importa as rotas relacionadas a filmes, configuradas no arquivo "movieRoutes.js"
import movieRoutes from "./routes/movieRoutes.js";
// Importa as rotas relacionadas a séries, configuradas no arquivo "serieRoutes.js"
import serieRoutes from "./routes/serieRoutes.js";

// Configuração básica do Express, criando uma instância da aplicação
const app = express();
// Middleware para interpretar os dados enviados em formulários (urlencoded), com a configuração "extended: false" para usar a biblioteca de consulta de strings padrão do Node.js
app.use(express.urlencoded({ extended: false }));
// Middleware para interpretar dados JSON recebidos nas requisições
app.use(express.json());
// Middleware para utilizar as rotas configuradas para filmes e séries, usando a rota raiz "/" como base
app.use("/", movieRoutes, serieRoutes);

// Define a porta em que a API vai rodar, neste caso, 4000
const port = 4000;
// Configuração do servidor para "ouvir" na porta definida e tratar erros durante a inicialização
app.listen(port, (error) => {
  // Verifica se houve algum erro ao iniciar o servidor
  if (error) {
    // Exibe uma mensagem de erro no console, caso ocorra
    console.log(`Erro: ${error}`);
  }
  // Se não houver erros, exibe no console a URL onde a API está rodando
  console.log(`API Rodando em http://localhost:${port}`);
});
