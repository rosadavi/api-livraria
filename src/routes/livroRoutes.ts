import express from 'express';
import { Livros } from '../controllers/livrosController';

const routeLivros = express.Router();
const livrosFuncoes = new Livros;

routeLivros.get('/listar', livrosFuncoes.listar);
routeLivros.post('/inserir', livrosFuncoes.cadastrar);
routeLivros.post('/atualizar', livrosFuncoes.atualizar);
routeLivros.post('/deletar', livrosFuncoes.deletar);

export default routeLivros;
