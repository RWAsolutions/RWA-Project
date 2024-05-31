import { Controller, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('Students')
export class StudentController {

  constructor(private studentService: StudentService) { }

  @Get()
  getAllStudents() {
    return this.studentService.getAll();
  }

  @Get(':id')
  getStudentById(@Param('id') id: number) {
    return this.studentService.getById(id);
  }

  @Get(':id/courses')
  getCourseByStudent(@Param('id') id: number) {
    return this.studentService.getCourseByStudent(id);
  }
}
