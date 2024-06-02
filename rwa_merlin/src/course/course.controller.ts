import { Controller, Get, Param } from '@nestjs/common';

import { CourseService } from './course.service';
import { Course } from './course.entity';
import { Semester } from 'src/semester/semester.entity';
import { Student } from 'src/student/student.entity';
import { Notification } from 'src/notification/notification.entity';

@Controller('Courses')
export class CourseController {
    constructor(private courseService: CourseService) {
        // console.log('courseService:', courseService);
    }

    @Get()
    getAll(): Promise<Course[]> {
        return this.courseService.getAll();
    }


    @Get('/:id')
    getById(@Param('id') id: number): Promise<Course> {
        return this.courseService.getById(id);
    }

    @Get(':id/semester')
    getSemesterThroughCourse(@Param('id') id: number): Promise<Semester> {
        return this.courseService.getSemesterThroughCourse(id);
    }

    @Get(':id/students')
    getStudentsByCourse(@Param('id') id: number): Promise<Student[]> {
        return this.courseService.getStudentsByCourse(id);
    } // Add the missing closing curly brace here

    @Get(':id/notifications') 
    getNotificationsThroughCourse(@Param('id') id: number): Promise<Notification[]> {
        return this.courseService.getNotificationsThroughCourse(id);
    }
    
}