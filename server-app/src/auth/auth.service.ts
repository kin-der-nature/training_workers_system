import { Injectable } from '@nestjs/common';
import { createUserDto } from '../users/dto/create_user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { loginExistsSystem } from 'src/users/utils/message';
import { incorrectAuthorizationData } from 'src/auth/utils';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: createUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registrationUser(userDto: createUserDto) {
    const candidate = await this.userService.getUserByLogin(userDto.login);
    if (candidate) {
      loginExistsSystem();
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  private async generateToken(user: any) {
    const payload = { email: user.login, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: createUserDto) {
    const user = await this.userService.getUserByLogin(userDto.login);

    if (!user) {
      incorrectAuthorizationData();
    }

    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }

    incorrectAuthorizationData();
  }
}
