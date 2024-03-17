// import { Questions } from './../questions/questions.model';
import { TestQuentions } from './test-quentions.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Test } from './test.model';
import { createTestDto, responsesOfTest } from './dto/index.dto';
import { test as testSchema } from './schema/';
import { Questions } from 'src/questions/questions.model';
import { Questions_variant } from 'src/questions/variants.model';

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
      include: [testSchema],

      attributes: ['id', 'name'],
    });

    return result;
  }

  async getTestById(v: number) {
    const result = await this.testRepository.findOne({
      where: {
        id: v,
      },
      attributes: ['id', 'name'],
      include: [testSchema],
    });

    return result;
  }

  async getResponsesOfTestById(v: number) {
    const currentTest = await this.testRepository.findOne({
      where: {
        id: v,
      },
      include: [
        {
          model: Questions,
          attributes: ['id'],
          include: [
            {
              model: Questions_variant,
              attributes: ['id', 'counte'],
            },
          ],
          through: {
            attributes: [],
          },
        },
      ],
      attributes: ['id'],
    });

    return currentTest;
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
