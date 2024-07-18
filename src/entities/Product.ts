import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("decimal")
  price: number;

  @Column()
  description: string;

  constructor(id: number, name: string, price: number, description: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}