import { Questions } from './questions.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Questions)
    private questionsRepository: typeof Questions,
  ) {}

  async getAllQuestion() {
    const result = await this.questionsRepository.findAll({
      include: { all: true },
    });

    return result;
  }
}
