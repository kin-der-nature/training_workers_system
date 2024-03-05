import { RolesService } from './../roles/roles.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { createUserDto } from './dto/create_user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async createUser(dto: createUserDto) {
    const user = await this.userRepository.create(dto);
    const defaultRole = await this.roleService.getRoleByName('admin1');
    await user.$set('roles', [defaultRole.id]);
    user.roles = [defaultRole];
    return defaultRole;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });

    return users;
  }

  async getUserByLogin(v: string) {
    const currentUser = await this.userRepository.findOne({
      where: {
        login: v,
      },
      include: { all: true },
    });

    return currentUser;
  }
}
