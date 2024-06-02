import { Test, TestingModule } from '@nestjs/testing';
import { ProfesorController } from './profesor.controller';

describe('ProfesorController', () => {
  let controller: ProfesorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfesorController],
    }).compile();

    controller = module.get<ProfesorController>(ProfesorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
