import { Profesor } from "src/profesor/profesor.entity"
import { Student } from "src/student/student.entity"
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity('User')
export class User {

    @PrimaryGeneratedColumn()
    userID: number

    @Column()
    password: string
    
    @Column()
    role: string

    @Column()
    email: string

    @OneToOne(() => Student, (student) => student.studentID)
    studentID: number
    
    @OneToOne(() => Profesor, (profesor) => profesor.profesorID)
    profesorID: number
   

}