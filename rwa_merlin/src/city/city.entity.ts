import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Student } from '../student/student.entity';

@Entity('City')
export class City {
    @PrimaryGeneratedColumn()
    postNumber: number;

    @Column()
    cityName: string;

    @OneToMany(() => Student, student => student.city)
    students: Student[];
}
