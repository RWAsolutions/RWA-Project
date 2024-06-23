import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Filter')
export class Filter {

    @PrimaryGeneratedColumn()
    filterID: number

    @Column()
    filterName: string

    @Column()
    filterDescription: string
}