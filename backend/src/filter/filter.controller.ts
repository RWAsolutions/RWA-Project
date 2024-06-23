import { Controller, Get, Param } from '@nestjs/common';
import { FilterService } from './filter.service';

@Controller('filter')
export class FilterController {
    
    constructor(private filterService: FilterService){}

    @Get()
    getAll() {
        return this.filterService.getAll()
    }

    @Get('/:id')
    getByID(@Param('id') id: number) {
        return this.filterService.getByID(id)
    }
}
