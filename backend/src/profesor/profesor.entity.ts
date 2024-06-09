import { City } from "src/city/city.entity";
import { Course } from "src/course/course.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Profesor')
export class Profesor {

    @PrimaryGeneratedColumn()
    profesorID: number;

    @Column()
    profesorName: string;

    @Column()
    profesorSurname: string;

    @Column()
    title: string;

    @Column()
    dateOfBirth: string;

    @Column()
    gender: string;

    @Column()
    street: string;

    @Column()
    streetNumber: string;

    @ManyToOne(() => City, city => city.profesors)
    @JoinColumn({ name: 'cityID' })
    city: City;

    @ManyToMany(() => Course)
    @JoinTable({
      name: 'profesor_course',
      joinColumn: {
        name: 'profesorID',
        referencedColumnName: 'profesorID'
      },
      inverseJoinColumn: {
        name: 'courseID',
        referencedColumnName: 'courseID'
      }
    })
    courses: Course[];
}