import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Study } from './study.entity';
import { Repository } from 'typeorm';
import { Faculty } from 'src/faculty/faculty.entity';

@Injectable()
export class StudyService {

    constructor(@InjectRepository(Study) private studyRepo: Repository<Study>){}

    async getStudyByID(id: number): Promise<Study> {
        const found = await this.studyRepo.findOne({ where: { studyID: id } });
        if (!found) {
            throw new NotFoundException(`Study with id ${id} not found`);
        }
        return found;
    }

    async getFacultyThroughStudy(id: number): Promise<Faculty> {
        
        const study = await this.studyRepo.findOne({
            where: { studyID: id },
            relations: ['faculty'],
        });
    
        if (!study) {
            throw new NotFoundException(`Faculty with id ${id} not found`);
        }
    
        return study.faculty;
    }
}
