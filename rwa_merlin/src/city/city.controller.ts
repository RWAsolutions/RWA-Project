import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './city.entity';

@Controller('cities')
export class CityController {
    constructor(private cityService: CityService) {
        console.log('cityService:', cityService);
    }

    @Get()
    findAll(): Promise<City[]> {
        return this.cityService.findAll();
    }

    @Get('/:id')
    findById(@Param('id') id: number): Promise<City> {
        return this.cityService.findById(id);
    }
}
