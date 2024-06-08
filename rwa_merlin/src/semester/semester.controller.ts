
import { Controller, Get, Param } from '@nestjs/common';
import { Semester } from './semester.entity';
import { SemesterService } from './semester.service';
import { Study } from 'src/study/study.entity';

@Controller('semester')
export class SemesterController {

    constructor(private semesterService: SemesterService){}

    @Get('/:id')
    getById(@Param('id') id: number): Promise<Semester> {
        return this.semesterService.getById(id);
    }

    @Get(':id/study')
    getStudiesThroughSemester(@Param('id') id: number): Promise<Study> {
        return this.semesterService.getStudiesThroughSemester(id);
    }
}
