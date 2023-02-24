import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image1: string
}
