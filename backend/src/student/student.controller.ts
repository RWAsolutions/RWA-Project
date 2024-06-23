import { Controller, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Role } from 'src/auth/roles/roles.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('students')
export class StudentController {

  constructor(private studentService: StudentService) { }

  @Get()
  getAllStudents() {
    return this.studentService.getAll();
  }

  @Roles(Role.Student, Role.Profesor)
  @Get(':id')
  getStudentById(@Param('id') id: number) {
    return this.studentService.getById(id);
  }

  @Get(':id/courses')
  getCourseByStudent(@Param('id') id: number) {
    return this.studentService.getCourseByStudent(id);
  }

  @Get(':id/notifications')
  getNotificationsByStudent(@Param('id') id: number) {
    return this.studentService.getNotificationByStudent(id);
  }

}
