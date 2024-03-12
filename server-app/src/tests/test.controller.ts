import { TestService } from 'src/tests/test.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { createTestDto } from './dto/index.dto';

@Controller('tests')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  getAll() {
    return this.testService.getTestsAll();
  }

  @Post()
  create(@Body() dto: createTestDto) {
    return this.testService.createTest(dto);
  }
}
