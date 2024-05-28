import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionService } from './connection/connection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from './city/city.module';
import { DataSource } from 'typeorm';
import { City } from './city/city.entity';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'secret',
      database: 'rwa_merlin',
      entities: [City],
      autoLoadEntities: true,
      synchronize: false,
    }),
    CityModule,
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConnectionService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log('dataSource:', dataSource);
  }
}
