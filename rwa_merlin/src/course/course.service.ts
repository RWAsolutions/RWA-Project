import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Semester } from 'src/semester/semester.entity';

@Injectable()
export class CourseService {
    constructor(@InjectRepository(Course) private courseRepository: Repository<Course>){
        console.log('courseRepository:', courseRepository);
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
}