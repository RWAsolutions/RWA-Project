import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';

@Injectable()
export class CityService {
    constructor(@InjectRepository(City) private cityRepository: Repository<City>){
        // console.log('cityRepository:', cityRepository);
    }

    async findAll(): Promise<City[]> {
        // console.log('cityRepository:', this.cityRepository.find());
        return this.cityRepository.find();
    }

    async findById(id: number): Promise<City> {
        const found = await this.cityRepository.findOne({ where: { postNumber: id } });
        if (!found) {
            throw new NotFoundException(`City with id ${id} not found`);
        }
        return found;
    }
}
