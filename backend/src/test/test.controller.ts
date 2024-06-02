import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('Tests')
export class TestController {

  constructor(private testService: TestService) { }

  @Get()
  getAllTests() {
    return this.testService.getAll();
  }
}
