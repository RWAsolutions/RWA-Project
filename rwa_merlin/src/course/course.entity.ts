import { Semester } from "src/semester/semester.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { Student } from "src/student/student.entity";

@Entity('Course')
export class Course {
    @PrimaryGeneratedColumn()
    courseID: number;

    @Column()
    courseName: string;

    @Column()
    ECTS: number;

    @Column()
    description: string;

    @ManyToOne(() => Semester, semester => semester.semesterID)
    @JoinColumn({ name: 'semesterID' })
    semester: Semester;

    @ManyToMany(() => Student, student => student.studentID)
    students: Student[];
}
