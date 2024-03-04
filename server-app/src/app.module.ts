import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { RolesModule } from './roles/roles.module';
import { Roles } from './roles/roles.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '12345',
      database: 'training_workers',
      models: [User, Roles],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
