import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { EntityManager, Repository, getManager } from 'typeorm';
import { Course } from 'src/course/course.entity';
import { City } from 'src/city/city.entity';

@Injectable()
export class StudentService {

  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>, private manager: EntityManager) { }

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
    return this.manager.query(`
      SELECT 
          Notification.notificationID,
          Notification.title, 
          Notification.content,
          user_notification.isRead,
          Profesor.profesorName,
          Profesor.profesorSurname
      FROM 
          user_notification 
      JOIN 
          User ON user_notification.userID = User.userID 
      JOIN 
          Student ON User.userID = Student.studentID 
      JOIN 
          Notification ON Notification.notificationID = user_notification.notificationID 
      JOIN 
          Profesor ON Notification.profesorID = Profesor.profesorID 
      WHERE 
          User.userID = ${id};
      `);
  }

  async getCitythroughStudent(id: number): Promise<City> {
    const student = await this.studentRepository.findOne({
        where: { studentID: id },
        relations: ['city'],
    });

    if (!student) {
        throw new NotFoundException("Student with id ${id} not found");
    }

    return student.city;
    }


}
