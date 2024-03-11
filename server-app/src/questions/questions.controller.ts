import { createQuestion } from './dto/index.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async getAll() {
    const result = await this.questionsService.getAllQuestions();
    return result.map(({ id, name, variants }) => ({ id, name, variants }));
  }

  @Post()
  async create(@Body() dto: createQuestion) {
    const result = await this.questionsService.createQuestion(dto);

    return result;
  }
}
