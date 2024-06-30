import { Controller, Get, Param } from '@nestjs/common';
import { StudentFacultyService } from './studentFaculty.service';

@Controller('student-faculty')
export class StudentFacultyController {
  constructor(private readonly studentFacultyService: StudentFacultyService) {}

  @Get(':studentId/faculty')
  async getFacultyId(
    @Param('studentId') studentId: number,
  ): Promise<{ facultyId: number }> {
    const facultyId =
      await this.studentFacultyService.getFacultyIdByStudentId(studentId);
    return { facultyId };
  }
}
