import {Response, Request} from 'express';
import { livroRepository } from '../repositories/livroRepository';
import { Livro } from '../models/livrariaModel';
import { AppDataSource } from '../data-source';

export class Livros {

    async cadastrar(req: Request, res: Response) {
        try {
            const { nome_livro, ano, autor } = req.body;
            const livroRepository = AppDataSource.getRepository(Livro);
            const novoLivro = livroRepository.create({
                nome_livro,
                ano,
                autor
            });
            const livroSalvo = await livroRepository.save(novoLivro);
            res.status(200).json({
                msg: "Novo livro inserido com sucesso: ",
                dados_livro: livroSalvo
            });
            console.log("Novo livro inserido com sucesso: ", livroSalvo);
            return;
        } catch(e) {
            res.status(500).json({
                msg: "Erro ao inserir livros!"
            });
            console.error("Erro ao inserir livros: ", e);
            return;
        }
    }

    async listar(req: Request, res: Response) {
        try {
            const livros = await livroRepository.find();
            if(livros.length === 0) {
                res.status(200).json({
                    message: 'Nao ha livros cadastrados'
                });
                console.log("Nao ha livros listados!");
            } else {
                res.status(200).json({
                    message : livros
                });
                console.log("Livros listados!");
            }
            return;
        } catch(e) {
            res.status(500).json({
                msg: "Erro ao listar livros!"
            });
            console.error("Erro ao listar livros: ", e);
            return;
        }
    }

    async atualizar(req: Request, res: Response) {
        try {
            const { caso, id, nome_livro, ano, autor } = req.body;
            const livro = AppDataSource.getRepository(Livro);
            switch(caso){
                case 1:
                    await livro.update(id, {nome_livro});
                    res.status(200).json({
                        msg: "Nome do livro atualizado com sucesso!",
                        nome_livro
                    });
                break

                case 2:
                    await livro.update(id, {ano});
                    res.status(200).json({
                        msg: "Ano do livro atualizado com sucesso!",
                        ano
                    });
                break

                case 3:
                    await livro.update(id, {autor});
                    res.status(200).json({
                        msg: "Autor do livro atualizado com sucesso!",
                        autor
                    });
                break

                case 4:
                    await livro.update(id, {nome_livro, ano, autor});
                    res.status(200).json({
                        msg: "Dados do livro atualizados com sucesso!",
                        atualizacao: {
                            nome_livro,
                            ano,
                            autor
                        }
                    });
            }
        } catch(e) {
            res.status(500).json({
                msg: "Erro ao atualizar livro!"
            });
            console.error("Erro ao atualizar livro: ", e);
            return;
        }
    }
}