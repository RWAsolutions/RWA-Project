import { Module } from '@nestjs/common';
import { StudyController } from './study.controller';
import { StudyService } from './study.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Study } from './study.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Study])],
  controllers: [StudyController],
  providers: [StudyService]
})
export class StudyModule {}
