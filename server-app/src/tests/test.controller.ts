import { TestService } from 'src/tests/test.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { createTestDto } from './dto/index.dto';

@Controller('tests')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  getAll() {
    return this.testService.getTestsAll();
  }

  @Get('one/')
  async getById(@Query('id') id: number) {
    const response = await this.testService.getTestById(id);

    if (!response) {
      throw new HttpException(
        `test with id: ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return response;
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
