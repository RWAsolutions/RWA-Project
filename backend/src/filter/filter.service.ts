import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Filter } from './filter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilterService {

    constructor(@InjectRepository(Filter) private filterRepository: Repository<Filter>){}


    async getAll(): Promise<Filter[]> {
        return await this.filterRepository.find()
    }

    async getByID(id: number): Promise<Filter> {
        const found = this.filterRepository.findOne({ where: { filterID: id } });
        if (!found) {
            throw new NotFoundException(`Filter with id ${id} was not found`);
        }
        return found
    }
}
