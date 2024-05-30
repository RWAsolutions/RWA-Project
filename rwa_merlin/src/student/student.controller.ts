import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('Students')
export class StudentController {

  constructor(private studentService: StudentService) { }

  @Get()
  getAllStudents() {
    return this.studentService.getAll();
  }

}
