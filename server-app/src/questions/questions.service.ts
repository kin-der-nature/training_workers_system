import { Questions } from './questions.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createQuestion } from './dto/index.dto';
import { Questions_variant } from './variants.model';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Questions)
    private questionsRepository: typeof Questions,
  ) {}

  async getAllQuestions() {
    const result = await this.questionsRepository.findAll({
      include: { all: true },
    });

    return result;
  }

  async createQuestion(dto: createQuestion) {
    const question = await this.questionsRepository.create({ name: dto.name });
    await Questions_variant.bulkCreate(
      dto.variants.map((item) => ({ ...item, quentions_id: question.id })),
    );

    return question;
  }
}
