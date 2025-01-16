import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './data-source';
import {Livros} from './controllers/livrosController';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const livrosController = new Livros();

app.use(express.json());

app.use('/', livrosController.listar);

app.listen(PORT, () => {
    AppDataSource.initialize()
  .then(() => {
    console.log("Conexao com o banco de dados estabelecida com sucesso!");
  })
  .catch((error)=> {
    console.error("Falha ao conectar ao banco de dados: ", error);
  });
    console.log("Sistema rodando na porta "+PORT);
});
