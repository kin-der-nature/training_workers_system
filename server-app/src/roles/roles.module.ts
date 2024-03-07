import { Module, forwardRef } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Roles } from './roles.model';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([Roles]), forwardRef(() => UsersModule)],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {}
