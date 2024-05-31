import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';
import { Student } from 'src/student/student.entity';

@Injectable()
export class CityService {
    constructor(@InjectRepository(City) private cityRepository: Repository<City>) {
        // console.log('cityRepository:', cityRepository);
    }

    async findAll(): Promise<City[]> {
        // console.log('cityRepository:', this.cityRepository.find());
        return this.cityRepository.find();
    }

    async getById(id: number): Promise<City> {
        const found = await this.cityRepository.findOne({ where: { postNumber: id } });
        if (!found) {
            throw new NotFoundException(`City with id ${id} not found`);
        }
        return found;
    }

    async getStudentsByCity(id: number): Promise<Student[]> {
        const city = await this.cityRepository.findOne({ where: { postNumber: id }, relations: ['students'] });
        if (!city) {
            throw new NotFoundException(`City with id ${id} not found`);
        }
        return city.students;
    }
}
