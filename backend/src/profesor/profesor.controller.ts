import { Controller, Get, Param } from '@nestjs/common';
import { ProfesorService } from './profesor.service';

@Controller('profesors')
export class ProfesorController {
    constructor(private profesorService: ProfesorService) {
        console.log('profesorService:', profesorService);
    }

    @Get()
    getAll() {
        return this.profesorService.getAll();
    }

    @Get('/:id')
    getById(@Param() params: any) {
        return this.profesorService.getById(params.id);
    }
}
