import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('City')
export class City {
    @PrimaryGeneratedColumn()
    postNumber: number;

    @Column()
    cityName: string;
}
