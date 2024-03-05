import { createUserDto } from 'src/users/dto/create_user.dto';
import { AuthService } from './auth.service';
import { Body, Post, Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() userDto: createUserDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  registration(@Body() userDto: createUserDto) {
    return this.authService.registrationUser(userDto);
  }
}
