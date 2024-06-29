import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentFaculty } from './studentFaculty.entity';

@Injectable()
export class StudentFacultyService {
  constructor(
    @InjectRepository(StudentFaculty)
    private readonly studentFacultyRepository: Repository<StudentFaculty>,
  ) {}

  async getFacultyIdByStudentId(studentId: number): Promise<number> {
    const studentFaculty = await this.studentFacultyRepository.findOne({
      where: { studentId },
    });
    if (!studentFaculty) {
      throw new Error('Student not found');
    }
    return studentFaculty.facultyId;
  }
}
