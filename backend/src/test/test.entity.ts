import { Course } from "src/course/course.entity";
import { Student } from "src/student/student.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Test')
export class Test {
  @PrimaryColumn({ name: 'courseID' })
  courseID: number;

  @PrimaryColumn({ name: 'studentID' })
  studentID: number;

  @PrimaryColumn({ name: 'TestDate' })
  testDate: Date;

  @ManyToOne(() => Course)
  @JoinColumn({ name: 'courseID' })
  course: Course;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'studentID' })
  student: Student;

  @Column({ name: 'Grade' })
  grade: number;

  @Column({ name: 'AcceptedGrade' })
  acceptedGrade: number;
}
