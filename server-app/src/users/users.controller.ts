import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('rest/users')
export class UsersController {
  constructor(private service: UsersService) {}
}
