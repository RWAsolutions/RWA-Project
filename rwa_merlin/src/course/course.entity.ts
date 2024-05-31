import { Semester } from "src/semester/semester.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
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

    @ManyToMany(() => Student)
    @JoinTable({
        name: 'student_course',
        joinColumn: {
            name: 'courseID',
            referencedColumnName: 'courseID'
        },
        inverseJoinColumn: {
            name: 'studentID',
            referencedColumnName: 'studentID'
        }
    })
    students: Student[];
}
