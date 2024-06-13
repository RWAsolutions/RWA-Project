import { Profesor } from "src/profesor/profesor.entity"
import { Student } from "src/student/student.entity"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"


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

    // @OneToOne(() => Student)
    // @JoinColumn({ name: 'studentID' })
    // studentID?: number;
    //
    // @OneToOne(() => Profesor)
    // @JoinColumn({ name: 'profesorID' })
    // profesorID?: number;

    @Column({ nullable: true }) // Allow null values if the user might not have a student ID
    studentID?: number;

    @Column({ nullable: true }) // Allow null values if the user might not have a profesor ID
    profesorID?: number;
}
