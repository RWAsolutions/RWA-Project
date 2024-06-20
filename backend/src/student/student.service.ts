import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { EntityManager, Repository, getManager } from 'typeorm';
import { Course } from 'src/course/course.entity';

@Injectable()
export class StudentService {

  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) { }

  async getAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async getById(id: number): Promise<Student> {
    return this.studentRepository.findOne({ where: { studentID: id } });
  }

  async getCourseByStudent(id: number): Promise<Course[]> {
    const student = await this.studentRepository.createQueryBuilder('student')
      .leftJoinAndSelect('student.courses', 'courses')
      .where('student.studentID = :id', { id })
      .getOne();

    if (!student) {
      throw new NotFoundException("Student with id ${id} not found");
    }

    return student.courses;
  }

  getNotificationByStudent(id: number) {
    throw new Error("Method not implemented.");
  }
}
