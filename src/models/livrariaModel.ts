import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  nome_livro: string;

  @Column({ type: "int" })
  ano: number;

  @Column({ type: "varchar", length: 255 })
  autor: string;
}
