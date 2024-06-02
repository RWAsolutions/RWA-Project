import { Module } from '@nestjs/common';
import { SemesterController } from './semester.controller';
import { SemesterService } from './semester.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Semester } from './semester.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Semester])],
  controllers: [SemesterController],
  providers: [SemesterService]
})
export class SemesterModule {}
