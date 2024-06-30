import { Faculty } from "src/faculty/faculty.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('Study')
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

}