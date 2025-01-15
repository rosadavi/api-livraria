import express from 'express';
import {Livros} from './controllers/livrosController';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const livrosController = new Livros();

app.use(express.json());

app.use('/', livrosController.listar);

app.listen(PORT, () => {
    console.log("Sistema rodando na porta "+PORT);
});
