import { Controller, Get } from '@nestjs/common';
import { SemesterService } from './semester.service';

@Controller('semester')
export class SemesterController {

    constructor(private semesterService: SemesterService) {}

   
}
