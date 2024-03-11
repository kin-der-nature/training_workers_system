import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { RolesModule } from './roles/roles.module';
import { Roles } from './roles/roles.model';
import { UserRoles } from './roles/user_roles.model';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { RolesGuards } from './roles/roles.guards';
import { APP_GUARD } from '@nestjs/core';
import { TestModule } from './tests/test.module';
import { Test } from './tests/test.model';
import { QuestionsModule } from './questions/questions.module';
import { Questions } from './questions/questions.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE_NAME,
      models: [User, Roles, UserRoles, Test, Questions],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    TestModule,
    QuestionsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, { provide: APP_GUARD, useClass: RolesGuards }],
})
export class AppModule {}
