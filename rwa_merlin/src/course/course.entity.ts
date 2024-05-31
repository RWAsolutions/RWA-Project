import { Semester } from "src/semester/semester.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Student } from "src/student/student.entity";
import { Test } from "src/test/test.entity";

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

    @OneToMany(() => Test, test => test.course)
    tests: Test[];
}
