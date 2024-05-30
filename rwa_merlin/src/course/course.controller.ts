import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course.entity';
import { Semester } from 'src/semester/semester.entity';

@Controller('courses')
export class CourseController {
    constructor(private courseService: CourseService) {
        console.log('courseService:', courseService);
    }

    @Get()
    getAll(): Promise<Course[]> {
        return this.courseService.getAll();
    }

    
    @Get('/:id')
    getById(@Param('id') id:number): Promise<Course> {
        return this.courseService.getById(id);
    }

    @Get(':id/semester')
    getSemesterThroughCourse(@Param('id') id: number): Promise<Semester> {
        return this.courseService.getSemesterThroughCourse(id);
    }
}
