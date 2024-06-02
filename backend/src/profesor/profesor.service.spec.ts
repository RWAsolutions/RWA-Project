import { Test, TestingModule } from '@nestjs/testing';
import { ProfesorService } from './profesor.service';

describe('ProfesorService', () => {
  let service: ProfesorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfesorService],
    }).compile();

    service = module.get<ProfesorService>(ProfesorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
