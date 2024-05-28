import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

    @Column()
    semesterID: number;
}