import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Semester } from 'src/semester/semester.entity';
import { Student } from 'src/student/student.entity';
import { Notification } from 'src/notification/notification.entity';

@Injectable()
export class CourseService {
    constructor(@InjectRepository(Course) private courseRepository: Repository<Course>) {
        // console.log('courseRepository:', courseRepository);
    }

    async getAll(): Promise<Course[]> {
        return this.courseRepository.find();
    }

    async getById(id: number): Promise<Course> {
        const found = this.courseRepository.findOne({ where: { courseID: id } });
        if (!found) {
            throw new NotFoundException(`Course with id ${id} not found`);
        }
        return found
    }

    async getSemesterThroughCourse(id: number): Promise<Semester> {

        const course = await this.courseRepository.findOne({
            where: { courseID: id },
            relations: ['semester'],
        });

        if (!course) {
            throw new NotFoundException("Course with id ${id} not found");
        }

        return course.semester;
    }

    async getStudentsByCourse(id: number): Promise<Student[]> {

        const course = await this.courseRepository.createQueryBuilder('course')
            .leftJoinAndSelect('course.students', 'students')
            .where('course.courseID = :id', { id })
            .getOne();
      
        if (!course) {
            throw new NotFoundException("Course with id ${id} not found");
        }
      
         return course.students;
    }

      
    async getNotificationsThroughCourse(id: number): Promise<Notification[]> {
        const course = await this.courseRepository.findOne({
            where: { courseID: id },
            relations: ['notifications'],
        });

        if (!course) {
            throw new NotFoundException("Course with id ${id} not found");
        }

        return course.notifications;
    }
}
