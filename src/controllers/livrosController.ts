import {Response, Request} from 'express';

export class Livros {
    async listar(res: Response, req: Request) {
        try {
            res.send("Hello World!");
        } catch(e) {
            res.send("Erro "+e);
        }
    }
}