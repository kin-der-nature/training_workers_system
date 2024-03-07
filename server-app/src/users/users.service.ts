import { RolesService } from './../roles/roles.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { createUserDto } from './dto/create_user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
    private roleService: RolesService,
    private jwtService: JwtService,
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

  async getUserById(id: number) {
    const currentUser = this.userRepository.findOne({
      where: { id },
      include: { all: true },
    });

    return currentUser;
  }

  async getUserByToken(dto: string): Promise<User | undefined> {
    try {
      const { id: userId } = await this.jwtService.verify(dto);
      const currentUser: User = await this.getUserById(userId);

      return currentUser;
    } catch {
      return undefined;
    }
  }
}
