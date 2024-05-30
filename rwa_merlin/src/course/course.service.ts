import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Repository } from 'typeorm';
import { Semester } from 'src/semester/semester.entity';

@Injectable()
export class CourseService {

    constructor(@InjectRepository(Course) private courseRepo: Repository<Course>) {}

    async getCourseByID(id: number): Promise<Course> {
        const found = await this.courseRepo.findOne({ where: { courseID: id } });
        if (!found) {
            throw new NotFoundException(`Course with id ${id} not found`);
        }
        return found;
    }

    async getSemesterThroughCourse(id: number): Promise<Semester> {
        
        const course = await this.courseRepo.findOne({
            where: { courseID: id },
            relations: ['semester'],
        });
    
        if (!course) {
            throw new NotFoundException(`Course with id ${id} not found`);
        }
    
        return course.semester;
    }
}
