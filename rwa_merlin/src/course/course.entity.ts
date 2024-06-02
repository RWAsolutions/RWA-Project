import { Notification } from "src/notification/notification.entity";
import { Semester } from "src/semester/semester.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";

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

    @OneToMany(() => Notification, notification => notification.course)
    notifications: Notification[];
}