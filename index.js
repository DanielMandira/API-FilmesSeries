import express from "express"
import mongoose from "./config/db-connection.js"
import Movie from "./models/Movie.js"

// Configuração do express
const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// utilizar as rotas
app.use("/", filmeRoutes)

// porta da api
const port = 4000
// configuração de endpoint
app.listen(port, (error)=>{
    if(error){
        console.log(`Erro: ${error}`)
    }
    console.log(`API Rodando em http://localhost:${port}`)
})