import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_livro: string;

  @Column()
  autor_livro: string;
}
