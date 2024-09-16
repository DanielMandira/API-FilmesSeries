# API de Filmes e Séries
API de filmes e séries feita para a matéria de Desenvolvimento Web 3.

## Importações

```javascript
import movieService from "../services/movieService.js";
import serieService from "../services/serieService.js";
import { ObjectId } from "mongodb";
```

## Endpoints

### 1. Buscar Todos os Filmes e Séries

- **Método:** `GET`
- **URL:** `/movies-and-series`
- **Descrição:** Recupera todos os filmes e séries do banco de dados.
- **Respostas:**
  - **200 OK**: Retorna um JSON com duas propriedades: `movies` e `series`, contendo as listas de filmes e séries, respectivamente.
    ```json
    {
      "movies": [
        {
          "imdb_id": "string",
          "title": "string",
          "original_title": "string",
          "alternative_titles": ["string"],
          "adult": true/false,
          "genres": ["string"],
          "synopsis": "string",
          "cast": ["string"],
          "origin_country": "string",
          "original_language": "string",
          "poster_path": "string",
          "release_date": "string",
          "duration": "number",
          "producer": "string",
          "budget": "number",
          "revenue": "number"
        }
      ],
      "series": [
        {
          "imdb_id": "string",
          "title": "string",
          "original_title": "string",
          "adult": true/false,
          "genres": ["string"],
          "seasons": "number",
          "origin_country": ["string"],
          "original_language": "string",
          "poster_path": "string",
          "producer": "string",
          "budget": "number",
          "revenue": "number"
        }
      ]
    }
    ```
  - **500 Internal Server Error**: Retorna um JSON com a mensagem de erro `Erro interno no servidor!`.
    ```json
    {
      "error": "Erro interno no servidor!"
    }
    ```

```javascript
const getAll = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    const series = await serieService.getAll();
    res.status(200).json({ movies, series });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};
```

### 2. Buscar Todos os Filmes

- **Método:** `GET`
- **URL:** `/movies`
- **Descrição:** Recupera todos os filmes do banco de dados.
- **Respostas:**
  - **200 OK**: Retorna um JSON com a lista de filmes.
    ```json
    {
      "movies": [
        {
          "imdb_id": "string",
          "title": "string",
          "original_title": "string",
          "alternative_titles": ["string"],
          "adult": true/false,
          "genres": ["string"],
          "synopsis": "string",
          "cast": ["string"],
          "origin_country": "string",
          "original_language": "string",
          "poster_path": "string",
          "release_date": "string",
          "duration": "number",
          "producer": "string",
          "budget": "number",
          "revenue": "number"
        }
      ]
    }
    ```
  - **500 Internal Server Error**: Retorna um JSON com a mensagem de erro `Erro interno no servidor!`.
    ```json
    {
      "error": "Erro interno no servidor!"
    }
    ```

```javascript
const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    res.status(200).json({ movies: movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};
```

### 3. Criar um Novo Filme

- **Método:** `POST`
- **URL:** `/movies`
- **Descrição:** Cria um novo filme com base nos dados fornecidos no corpo da requisição.
- **Corpo da Requisição:**
  ```json
  {
    "imdb_id": "string",
    "title": "string",
    "original_title": "string",
    "alternative_titles": ["string"],
    "adult": true/false,
    "genres": ["string"],
    "synopsis": "string",
    "cast": ["string"],
    "origin_country": "string",
    "original_language": "string",
    "poster_path": "string",
    "release_date": "string",
    "duration": "number",
    "producer": "string",
    "budget": "number",
    "revenue": "number"
  }
  ```
- **Respostas:**
  - **201 Created**: Indica que o filme foi criado com sucesso.
  - **500 Internal Server Error**: Retorna um JSON com a mensagem de erro `Erro interno no servidor!`.
    ```json
    {
      "error": "Erro interno no servidor!"
    }
    ```

```javascript
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
```

### 4. Deletar um Filme

- **Método:** `DELETE`
- **URL:** `/movies/:id`
- **Descrição:** Remove um filme do banco de dados com base no ID fornecido na URL.
- **Parâmetros da URL:**
  - `id` (string): ID do filme a ser excluído.
- **Respostas:**
  - **204 No Content**: Indica que o filme foi excluído com sucesso.
  - **400 Bad Request**: Retorna um status de erro se o ID fornecido não for válido.
  - **500 Internal Server Error**: Retorna um JSON com a mensagem de erro `Erro interno no servidor!`.
    ```json
    {
      "error": "Erro interno no servidor!"
    }
    ```

```javascript
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
```

### 5. Atualizar um Filme

- **Método:** `PUT`
- **URL:** `/movies/:id`
- **Descrição:** Atualiza as informações de um filme existente com base no ID e nos dados fornecidos no corpo da requisição.
- **Parâmetros da URL:**
  - `id` (string): ID do filme a ser atualizado.
- **Corpo da Requisição:**
  ```json
  {
    "imdb_id": "string",
    "title": "string",
    "original_title": "string",
    "alternative_titles": ["string"],
    "adult": true/false,
    "genres": ["string"],
    "synopsis": "string",
    "cast": ["string"],
    "origin_country": "string",
    "original_language": "string",
    "poster_path": "string",
    "release_date": "string",
    "duration": "number",
    "producer": "string",
    "budget": "number",
    "revenue": "number"
  }
  ```
- **Respostas:**
  - **200 OK**: Indica que o filme foi atualizado com sucesso.
  - **400 Bad Request**: Retorna um status de erro se o ID fornecido não for válido.
  - **500 Internal Server Error**: Retorna um JSON com a mensagem de erro `Erro interno no servidor!`.
    ```json
    {
      "error": "Erro interno no servidor!"
    }
    ```

```javascript
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

      res.sendStatus(

200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};
```

### 6. Buscar um Filme por ID

- **Método:** `GET`
- **URL:** `/movies/:id`
- **Descrição:** Recupera um filme do banco de dados com base no ID fornecido na URL.
- **Parâmetros da URL:**
  - `id` (string): ID do filme a ser recuperado.
- **Respostas:**
  - **200 OK**: Retorna um JSON com os detalhes do filme.
    ```json
    {
      "imdb_id": "string",
      "title": "string",
      "original_title": "string",
      "alternative_titles": ["string"],
      "adult": true/false,
      "genres": ["string"],
      "synopsis": "string",
      "cast": ["string"],
      "origin_country": "string",
      "original_language": "string",
      "poster_path": "string",
      "release_date": "string",
      "duration": "number",
      "producer": "string",
      "budget": "number",
      "revenue": "number"
    }
    ```
  - **400 Bad Request**: Retorna um status de erro se o ID fornecido não for válido.
  - **500 Internal Server Error**: Retorna um JSON com a mensagem de erro `Erro interno no servidor!`.
    ```json
    {
      "error": "Erro interno no servidor!"
    }
    ```

```javascript
const getMovieById = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const movie = await movieService.GetById(id);
      res.status(200).json(movie);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};
```

### 7. Buscar Todas as Séries

- **Método:** `GET`
- **URL:** `/series`
- **Descrição:** Recupera todas as séries do banco de dados.
- **Respostas:**
  - **200 OK**: Retorna um JSON com a lista de séries.
    ```json
    {
      "series": [
        {
          "imdb_id": "string",
          "title": "string",
          "original_title": "string",
          "adult": true/false,
          "genres": ["string"],
          "seasons": "number",
          "origin_country": ["string"],
          "original_language": "string",
          "poster_path": "string",
          "producer": "string",
          "budget": "number",
          "revenue": "number"
        }
      ]
    }
    ```
  - **500 Internal Server Error**: Retorna um JSON com a mensagem de erro `Erro interno no servidor!`.
    ```json
    {
      "error": "Erro interno no servidor!"
    }
    ```

```javascript
const getAllSeries = async (req, res) => {
  try {
    const series = await serieService.getAll();
    res.status(200).json({ series });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};
```

### 8. Criar uma Nova Série

- **Método:** `POST`
- **URL:** `/series`
- **Descrição:** Cria uma nova série com base nos dados fornecidos no corpo da requisição.
- **Corpo da Requisição:**
  ```json
  {
    "imdb_id": "string",
    "title": "string",
    "original_title": "string",
    "adult": true/false,
    "genres": ["string"],
    "seasons": "number",
    "origin_country": ["string"],
    "original_language": "string",
    "poster_path": "string",
    "producer": "string",
    "budget": "number",
    "revenue": "number"
  }
  ```
- **Respostas:**
  - **201 Created**: Indica que a série foi criada com sucesso.
  - **500 Internal Server Error**: Retorna um JSON com a mensagem de erro `Erro interno no servidor!`.
    ```json
    {
      "error": "Erro interno no servidor!"
    }
    ```

```javascript
const createSerie = async (req, res) => {
  try {
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

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};
```

### 9. Deletar uma Série

- **Método:** `DELETE`
- **URL:** `/series/:id`
- **Descrição:** Remove uma série do banco de dados com base no ID fornecido na URL.
- **Parâmetros da URL:**
  - `id` (string): ID da série a ser excluída.
- **Respostas:**
  - **204 No Content**: Indica que a série foi excluída com sucesso.
  - **400 Bad Request**: Retorna um status de erro se o ID fornecido não for válido.
  - **500 Internal Server Error**: Retorna um JSON com a mensagem de erro `Erro interno no servidor!`.
    ```json
    {
      "error": "Erro interno no servidor!"
    }
    ```

```javascript
const deleteSerie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      serieService.Delete(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};
```

### 10. Atualizar uma Série

- **Método:** `PUT`
- **URL:** `/series/:id`
- **Descrição:** Atualiza as informações de uma série existente com base no ID e nos dados fornecidos no corpo da requisição.
- **Parâmetros da URL:**
  - `id` (string): ID da série a ser atualizada.
- **Corpo da Requisição:**
  ```json
  {
    "imdb_id": "string",
    "title": "string",
    "original_title": "string",
    "adult": true/false,
    "genres": ["string"],
    "seasons": "number",
    "origin_country": ["string"],
    "original_language": "string",
    "poster_path": "string",
    "producer": "string",
    "budget": "number",
    "revenue": "number"
  }
  ```
- **Respostas:**
  - **200 OK**: Indica que a série foi atualizada com sucesso.
  - **400 Bad Request**: Retorna um status de erro se o ID fornecido não for válido.
  - **500 Internal Server Error**: Retorna um JSON com a mensagem de erro `Erro interno no servidor!`.
    ```json
    {
      "error": "Erro interno no servidor!"
    }
    ```

```javascript
const UpdateSerie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;

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

      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};
```

### 11. Buscar uma Série por ID

- **Método:** `GET`
- **URL:** `/series/:id`
- **Descrição:** Recupera uma série do banco de dados com base no ID fornecido na URL.
- **Parâmetros da URL:**
  - `id` (string): ID da série a ser recuperada.
- **Respostas:**
  - **200 OK**: Retorna um JSON com os detalhes da série.
    ```json
    {
      "imdb_id": "string",
      "title": "string",
      "original_title": "string",
      "adult": true/false,
      "genres": ["string"],
      "seasons": "number",
      "origin_country": ["string"],
      "original_language": "string",
      "poster_path": "string",
      "producer": "string",
      "budget": "number",
      "revenue": "number"
    }
    ```
  - **400 Bad Request**: Retorna um status de erro se o ID fornecido não for válido.
  - **500 Internal Server Error**: Retorna um JSON com a mensagem de erro `Erro interno no servidor!`.
    ```json
    {
      "error": "Erro interno no servidor!"
    }
    ```

```javascript
const getSerieById = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const serie = await serieService.GetById(id);
      res.status(200).json(serie);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};
```
