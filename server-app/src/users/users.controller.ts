import { Body, Controller, Get, Query, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create_user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { userWithByCurrentParamsNotFound } from './utils/message';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() userDto: createUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Get('get_by_token/')
  async getByToken(@Query('token') token: string) {
    const user = await this.usersService.getUserByToken(token);

    if (!user) {
      userWithByCurrentParamsNotFound();
    }

    return user;
  }
}
