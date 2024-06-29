import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StudentFaculty {
  @PrimaryGeneratedColumn()
  studentID: number;

  @Column()
  studentId: number;

  @Column()
  facultyId: number;
}
