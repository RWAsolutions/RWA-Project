import { Semester } from "src/semester/semester.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()
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
}