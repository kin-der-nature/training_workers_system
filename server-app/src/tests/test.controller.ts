import { TestService } from 'src/tests/test.service';
import { Body, Controller, Post } from '@nestjs/common';
import { createTestDto } from './dto/index.dto';

@Controller('tests')
export class TestController {
  constructor(private testService: TestService) {}

  @Post()
  create(@Body() dto: createTestDto) {
    return this.testService.createTest(dto);
  }
}
