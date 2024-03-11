import { Controller, Get } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async getAll() {
    const result = await this.questionsService.getAllQuestions();
    return result.map(({ id, name, variants }) => ({ id, name, variants }));
  }
}
