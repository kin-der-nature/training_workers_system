import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Questions } from './questions.model';
import { Questions_variant } from './variants.model';

@Module({
  controllers: [QuestionsController],
  imports: [SequelizeModule.forFeature([Questions, Questions_variant])],
  providers: [QuestionsService],
})
export class QuestionsModule {}
