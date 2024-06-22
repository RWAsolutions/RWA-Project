import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './profesor.entity';
import { City } from 'src/city/city.entity';

@Injectable()
export class ProfesorService {
    constructor(@InjectRepository(Profesor) private profesorRepository: Repository<Profesor>){
        console.log('profesorRepository:', profesorRepository);
    }

    async getAll(): Promise<Profesor[]> {
        return this.profesorRepository.find();
    }

    async getById(id: number): Promise<Profesor> {
        const found = this.profesorRepository.findOne({ where: { profesorID: id } });
        if (!found) {
            throw new NotFoundException(`Profesor with id ${id} not found`);
        }
        return found
    }

    async getCitythroughProfesor(id: number): Promise<City> {
        const profesor = await this.profesorRepository.findOne({
            where: { profesorID: id },
            relations: ['city'],
        });
    
        if (!profesor) {
            throw new NotFoundException("Profesor with id ${id} not found");
        }
    
        return profesor.city;
        }
}
