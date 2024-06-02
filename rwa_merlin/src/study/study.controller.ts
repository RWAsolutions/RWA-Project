import { Controller, Get, Param } from '@nestjs/common';
import { StudyService } from './study.service';
import { Study } from './study.entity';
import { Faculty } from 'src/faculty/faculty.entity';

@Controller('study')
export class StudyController {

    constructor(private studyService: StudyService){}

    @Get('\:id')
    getCourseByID(@Param('id') id: number): Promise<Study> {
        return this.studyService.getStudyByID(id)
    }

    @Get(':id/faculty')
    getFacultyThroughStudy(@Param('id') id: number): Promise<Faculty> {
        return this.studyService.getFacultyThroughStudy(id)
    }


}
