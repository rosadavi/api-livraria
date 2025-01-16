import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { Livro } from "./models/livrariaModel";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST_DB,
  port: 5432,
  username: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.DATABASE,
  synchronize: true,
  logging: true,
  entities: [Livro],
  subscribers: [],
  migrations: [],
});
