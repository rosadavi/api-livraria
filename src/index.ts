import { AppDataSource } from './data-source';
import routeLivros from './routes/livroRoutes';
import express from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/livros', routeLivros);

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
