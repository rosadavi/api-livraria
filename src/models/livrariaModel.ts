import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  nome_livro: string | undefined;

  @Column()
  autor_livro: string | undefined;
}
