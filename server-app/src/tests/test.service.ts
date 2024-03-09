import { createTestDto } from './dto/index.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Test } from './test.model';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(Test)
    private testRepository: typeof Test,
  ) {}

  createTest(dto: createTestDto) {
    const result = this.testRepository.create(dto);

    return result;
  }
}
