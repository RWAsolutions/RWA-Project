
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Semester } from './semester.entity';
import { Repository } from 'typeorm';
import { Study } from 'src/study/study.entity';

@Injectable()
export class SemesterService {

    constructor(@InjectRepository(Semester) private semesterRepo: Repository<Semester>){}

    async getById(id: number): Promise<Semester> {

        const found = this.semesterRepo.findOne({ where: { semesterID: id } });
        if (!found) {
            throw new NotFoundException(`Semester with id ${id} not found`);
        }
        return found
    }

    async getStudiesThroughSemester(id: number): Promise<Study> {

        const semester = await this.semesterRepo.findOne({
            where: { semesterID: id },
            relations: ['study'],
        });

        if (!semester) {
            throw new NotFoundException("Studies with id ${id} not found");
        }

        return semester.study;
    }
}