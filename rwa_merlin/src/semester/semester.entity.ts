import { Course } from "src/course/course.entity";
import { Study } from "src/study/study.entity";

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Semester')
export class Semester {
    @PrimaryGeneratedColumn()
    semesterID: number;

    @Column()
    semesterOrdinalNumber: number;

    @ManyToOne(() => Study, study => study.semesters)
    @JoinColumn({name: 'studyID'})
    study: Study;

}
