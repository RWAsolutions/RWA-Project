import { Module } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { FacultyController } from './faculty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faculty } from './faculty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Faculty])],
  providers: [FacultyService],
  controllers: [FacultyController]
})
export class FacultyModule {}
