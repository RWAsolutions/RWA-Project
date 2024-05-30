import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from './city/city.module';
import { DataSource } from 'typeorm';
import { City } from './city/city.entity';
import { CourseModule } from './course/course.module';
import { SemesterModule } from './semester/semester.module';
import { Course } from './course/course.entity';
import { Semester } from './semester/semester.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'secret',
      database: 'rwa_merlin',
      entities: [City, Course, Semester, Student],
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
    }),
    CityModule,
    CourseModule,
    SemesterModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    // console.log('dataSource:', dataSource);
  }
}
