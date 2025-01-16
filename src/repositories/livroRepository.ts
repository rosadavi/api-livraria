import { AppDataSource } from "../data-source";
import { Livro } from "../models/livrariaModel";

export const livroRepository = AppDataSource.getRepository(Livro);
