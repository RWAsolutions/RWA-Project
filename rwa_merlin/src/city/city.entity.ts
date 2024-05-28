import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    postNumber: number;

    @Column()
    cityName: string;
}