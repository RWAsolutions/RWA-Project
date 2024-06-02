import { Profesor } from 'src/profesor/profesor.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('City')
export class City {
    @PrimaryGeneratedColumn()
    postNumber: number;

    @Column()
    cityName: string;

    @OneToMany(() => Profesor, profesor => profesor.profesorID)
    profesors: Profesor[];
}
