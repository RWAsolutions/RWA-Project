import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Student } from '../student/student.entity';
import { Profesor } from 'src/profesor/profesor.entity';

@Entity('City')
export class City {
    @PrimaryGeneratedColumn()
    postNumber: number;

    @Column()
    cityName: string;

    @OneToMany(() => Student, student => student.city)
    students: Student[];
  
    @OneToMany(() => Profesor, profesor => profesor.profesorID)
    profesors: Profesor[];
}
