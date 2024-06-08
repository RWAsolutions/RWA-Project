import { Faculty } from "src/faculty/faculty.entity";
import { Semester } from "src/semester/semester.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Study {

    @PrimaryGeneratedColumn()
    studyID: number

    @Column()
    studyName: string
    
    @Column()
    type: string
    
    @Column()
    firstDegree: number

    @Column()
    secondDegree: number

    @ManyToOne(() => Faculty, (faculty) => faculty.facultyID)
    @JoinColumn({name: 'facultyID'})
    faculty: Faculty

    @OneToMany(() => Semester, semester => semester.study)
    semesters: Semester[];

}