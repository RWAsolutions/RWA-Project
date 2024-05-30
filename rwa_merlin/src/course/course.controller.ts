import { Controller, Get, Param } from '@nestjs/common';
import { Course } from './course.entity';
import { CourseService } from './course.service';
import { Semester } from 'src/semester/semester.entity';

@Controller('course')
export class CourseController {

    constructor(private courseService: CourseService) {}

    @Get('\:id')
    getCourseByID(@Param('id') id: number): Promise<Course> {
        return this.courseService.getCourseByID(id)
    }

    @Get(':id/semester')
    getSemesterThroughCourse(@Param('id') id: number): Promise<Semester> {
        return this.courseService.getSemesterThroughCourse(id);
    }
}
