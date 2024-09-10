import Serie from "../models/Series.js";

class serieService {
  async getAll() {
    try {
      const series = await Serie.find();
      return series;
    } catch (error) {
      console.log(error);
    }
  }

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
      await newSerie.save();
    } catch (error) {
      console.log(error);
    }
  }

  async Delete(id) {
    try {
      await Serie.findByIdAndDelete(id);
      console.log(`Serie com id ${id} Deletado com sucesso!`);
    } catch (error) {
      console.log(error);
    }
  }

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
      console.log(`Serie com id ${id} alterado com sucesso!`);
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id) {
    try {
      const serie = await Serie.findOne({ _id: id });
      return serie;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new serieService();
