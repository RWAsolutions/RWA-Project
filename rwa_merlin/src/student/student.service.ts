import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {

  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) { }

  async getAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }
}
