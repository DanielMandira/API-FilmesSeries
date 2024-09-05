import mongoose from "mongoose";

const seasonsSchema = new mongoose.Schema({
    season: Number,
    episodes: Number,
    realese_date: Date,
    sinopse: String,
    poster_path: String
})

const serieSchema = new mongoose.Schema({
    imdb_id: String,
    title: String,
    original_title: String,
    adult: Boolean,
    genres: [String],
    seasons: [seasonsSchema],
    origin_country: String,
    original_language: String,
    poster_path: String,
    producer: String,
    budget: Number,
    revenue: Number,


})