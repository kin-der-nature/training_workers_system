import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { Test } from './test.model';
import { TestQuentions } from './test-quentions.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Test, TestQuentions])],
  providers: [TestService],
  controllers: [TestController],
})
export class TestModule {}
