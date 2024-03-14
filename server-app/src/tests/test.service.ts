// import { Questions } from './../questions/questions.model';
import { TestQuentions } from './test-quentions.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Test } from './test.model';
import { Questions } from 'src/questions/questions.model';
import { Questions_variant } from 'src/questions/variants.model';
import { createTestDto } from './dto/index.dto';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(Test)
    private testRepository: typeof Test,
    @InjectModel(TestQuentions)
    private TestQuentionsRepository: typeof TestQuentions,
  ) {}

  async getTestsAll(): Promise<Test[] | undefined> {
    const result = await this.testRepository.findAll({
      include: { all: true },
    });

    return result;
  }

  async createTest(dto: createTestDto) {
    const test = await this.testRepository.create({ name: dto.name });
    await this.TestQuentionsRepository.bulkCreate(
      dto.questions.map((id) => ({
        test_id: test.id,
        quentions_id: id,
      })),
    );
    return test;
  }
}
