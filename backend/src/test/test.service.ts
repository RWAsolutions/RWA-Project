import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './test.entity';

@Injectable()
export class TestService {
  constructor(@InjectRepository(Test) private studentRepository: Repository<Test>) { }

  async getAll(): Promise<Test[]> {
    return this.studentRepository.find();
  }
}
