import { Course } from "src/course/course.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Notification')
export class Notification {
    @PrimaryGeneratedColumn()
    notificationID: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @ManyToOne(() => Course, course => course.notifications)
    @JoinColumn({ name: 'courseID' })
    course: Course;
}