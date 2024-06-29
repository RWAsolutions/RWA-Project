import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentFaculty } from './studentFaculty.entity';
import { StudentFacultyService } from './studentFaculty.service';
import { StudentFacultyController } from './studentFaculty.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StudentFaculty])],
  providers: [StudentFacultyService],
  controllers: [StudentFacultyController],
})
export class StudentFacultyModule {}
