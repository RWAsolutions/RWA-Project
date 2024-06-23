import { Module } from '@nestjs/common';
import { FilterService } from './filter.service';
import { FilterController } from './filter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Filter } from './filter.entity';

@Module({
  providers: [FilterService],
  controllers: [FilterController],
  imports: [TypeOrmModule.forFeature([Filter])]
})
export class FilterModule {}
