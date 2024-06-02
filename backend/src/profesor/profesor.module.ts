import { Module } from '@nestjs/common';
import { ProfesorController } from './profesor.controller';
import { ProfesorService } from './profesor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './profesor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor])],
  controllers: [ProfesorController],
  providers: [ProfesorService]
})
export class ProfesorModule {}
