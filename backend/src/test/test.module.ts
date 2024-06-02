import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './test.entity';

@Module({
  controllers: [TestController],
  providers: [TestService],
  imports: [TypeOrmModule.forFeature([Test])],
})
export class TestModule { }
