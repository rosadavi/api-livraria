import {Response, Request} from 'express';
import { livroRepository } from '../repositories/livroRepository';

export class Livros {
    async listar(req: Request, res: Response) {
        try {
            const livros = await livroRepository.find();
            res.status(200).json(livros);
            console.log("Livros listados.!");
            return;

        } catch(e) {
            res.status(500).json({
                msg: "Erro ao listar livros: ", 
                erro: e
            });
            console.error("Erro ao listar livros: ", e);
            return;

        }
    }
}