import { City } from "src/city/city.entity";
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import {Student} from "../student/student.entity";
import {Course} from "../course/course.entity";

@Entity("Faculty")
export class Faculty {

    @PrimaryGeneratedColumn()
    facultyID: number

    @Column()
    facultyName: string
    
    @Column()
    street: string

    @Column()
    streetNumber: number

    @Column()
    contactNumber: number

    @Column()
    contactMail: string

    @ManyToOne(() => City, (city) => city.postNumber)
    @JoinColumn({name: 'cityID'})
    city: City

}