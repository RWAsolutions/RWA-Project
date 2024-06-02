import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './city.entity';
import { Student } from 'src/student/student.entity';

@Controller('Cities')
export class CityController {
    constructor(private cityService: CityService) {
        // console.log('cityService:', cityService);
    }

    @Get()
    getAll(): Promise<City[]> {
        return this.cityService.getAll();
    }

    @Get('/:id')
    getById(@Param('id') id: number): Promise<City> {
        return this.cityService.getById(id);
    }

    @Get(':id/Students')
    getStudentsByCityID(@Param('id') id: number): Promise<Student[]> {
        return this.cityService.getStudentsByCity(id);
    }
}
