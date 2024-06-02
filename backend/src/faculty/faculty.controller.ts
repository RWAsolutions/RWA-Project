import { Controller, Get, Param } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { Faculty } from './faculty.entity';
import { City } from 'src/city/city.entity';

@Controller('faculty')
export class FacultyController {


    constructor(private facultyService: FacultyService) {}

    @Get('\:id')
    getCourseByID(@Param('id') id: number): Promise<Faculty> {
        return this.facultyService.getFacultyByID(id)
    }

    @Get(':id/city')
    getCityThroughCourse(@Param('id') id: number): Promise<City> {
        return this.facultyService.getCityThroughFaculty(id)
    }
}
