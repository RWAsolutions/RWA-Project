import { City } from "src/city/city.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
}