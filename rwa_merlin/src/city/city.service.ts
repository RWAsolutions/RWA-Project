import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';

@Injectable()
export class CityService {
    constructor(@InjectRepository(City) private cityRepository: Repository<City>){
        // console.log('cityRepository:', cityRepository);
    }

<<<<<<< HEAD
    async getAll(): Promise<City[]> {
        console.log('cityRepository:', this.cityRepository.find());
=======
    async findAll(): Promise<City[]> {
        // console.log('cityRepository:', this.cityRepository.find());
>>>>>>> abc42806ce842c71548c6de29fa2b9aeb0da13db
        return this.cityRepository.find();
    }

    async getById(id: number): Promise<City> {
        const found = await this.cityRepository.findOne({ where: { postNumber: id } });
        if (!found) {
            throw new NotFoundException(`City with id ${id} not found`);
        }
        return found;
    }
}
