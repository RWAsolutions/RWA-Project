import { Test, TestingModule } from '@nestjs/testing';
import { SemesterController } from './semester.controller';

describe('SemesterController', () => {
  let controller: SemesterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SemesterController],
    }).compile();

    controller = module.get<SemesterController>(SemesterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
