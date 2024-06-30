import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty } from './faculty.entity';
import { Repository } from 'typeorm';
import { City } from 'src/city/city.entity';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(Faculty) private facultyRepo: Repository<Faculty>,
  ) {}

  async getFacultyByID(id: number): Promise<Faculty> {
    const found = await this.facultyRepo.findOne({ where: { facultyID: id } });
    if (!found) {
      throw new NotFoundException(`Faculty with id ${id} not found`);
    }
    return found;
  }

  async getCityThroughFaculty(id: number): Promise<City> {
    const faculty = await this.facultyRepo.findOne({
      where: { facultyID: id },
      relations: ['city'],
    });

    if (!faculty) {
      throw new NotFoundException(`Faculty with id ${id} not found`);
    }

    return faculty.city;
  }


}
