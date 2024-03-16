import { TestService } from 'src/tests/test.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { createTestDto } from './dto/index.dto';

@Controller('tests')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  getAll() {
    return this.testService.getTestsAll();
  }

  @Get('get_one/')
  getById(@Query('id') id: any) {
    console.log('param id', id);
    return this.testService.getTestById(id);
  }

  @Post()
  create(@Body() dto: createTestDto) {
    return this.testService.createTest(dto);
  }

  @Post('take_test/')
  take_test(@Body() dto: any) {
    return this.testService.takeTest(dto);
  }
}
