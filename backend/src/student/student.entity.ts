import { City } from 'src/city/city.entity';
import { Course } from 'src/course/course.entity';
import { Test } from 'src/test/test.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
  OneToMany, OneToOne,
} from 'typeorm';
import { Faculty } from '../faculty/faculty.entity';

@Entity('Student')
export class Student {
  @PrimaryGeneratedColumn()
  studentID: number;

  @Column()
  studentName: string;

  @Column()
  studentSurname: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  gender: string;

  @Column()
  street: string;

  @Column()
  streetNumber: number;

  @ManyToOne(() => City, (city) => city.postNumber)
  @JoinColumn({ name: 'cityID' })
  city: City;

  // @ManyToMany(() => Course, course => course.courseID)
  // courses: Course[];
  @ManyToMany(() => Course)
  @JoinTable({
    name: 'student_course',
    joinColumn: {
      name: 'studentID',
      referencedColumnName: 'studentID',
    },
    inverseJoinColumn: {
      name: 'courseID',
      referencedColumnName: 'courseID',
    },
  })
  courses: Course[];

  @OneToMany(() => Test, (test) => test.student)
  tests: Test[];

}
