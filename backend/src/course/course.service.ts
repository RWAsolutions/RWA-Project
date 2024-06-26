import { Injectable, NotFoundException } from '@nestjs/common';

import { Course } from './course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Semester } from 'src/semester/semester.entity';
import { Student } from 'src/student/student.entity';
import { Notification } from 'src/notification/notification.entity';
import { Profesor } from 'src/profesor/profesor.entity';

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

    async getProfesorsByCourse(id: number): Promise<Profesor[]> {
            
            const course = await this.courseRepository.createQueryBuilder('course')
                .leftJoinAndSelect('course.profesors', 'profesors')
                .where('course.courseID = :id', { id })
                .getOne();
        
            if (!course) {
                throw new NotFoundException("Course with id ${id} not found");
            }
        
            return course.profesors;
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

    async getCoursesWithSemesterInfo(studentID: number): Promise<any[]> {
        return await this.courseRepository
        .createQueryBuilder('course')
        .innerJoin('student_course','sc','sc.courseID = course.courseID')
        .innerJoin('course.semester','semester')
        .where('sc.studentID = :studentID', { studentID })
        .select(['course.courseID', 'semester.semesterID', 'semester.semesterOrdinalNumber'])
        .getMany();
    }

    async getStudentCourseInfo(studentID: number, courseID: number) {
        return await this.courseRepository
        .createQueryBuilder('course')
        .innerJoinAndSelect('student_course','sc','sc.courseID = course.courseID')
        .innerJoinAndSelect('course.semester', 'semester')
        .innerJoin('semester.study', 'study')
        .select([
            'sc.dateOfEnrollment AS dateOfEnrollment',
            'course.courseID AS courseID',
            'semester.semesterID AS semesterID',
            'study.studyID AS studyID',
            'study.studyName AS studyName',
        ])
        .where(
            'sc.studentID = :studentID AND sc.courseID = :courseID', { studentID, courseID },
        )
        .getRawOne()
    }
}
