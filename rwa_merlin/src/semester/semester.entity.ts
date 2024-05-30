import { Course } from "src/course/course.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Semester {
    
    @PrimaryGeneratedColumn()
    semesterID: number

    @Column()
    semesterOrdinalNumber: number

    @Column()
    studyID: number
    
    @OneToMany(() => Course, (course) => course.courseID)
    courses: Course[];
}