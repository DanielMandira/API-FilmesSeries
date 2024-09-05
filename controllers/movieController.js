import movieService from "../services/movieService.js";
import { ObjectId } from "mongodb";

const getAllMovies = async (req, res) =>{
    try{
        const movies = await movieService.getAll()
        res.status(200).json({movies: movies})
    }catch(error){
        console.log(error)
        res.status(500).json({error: "Erro interno no servidor!"})
    }
}

