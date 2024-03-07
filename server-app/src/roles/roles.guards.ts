import { UsersService } from './../users/users.service';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.model';
import { User } from 'src/users/user.model';
import { notAuth } from 'src/users/utils/message';
import { tokenNoDecode } from 'src/utils/message';

@Injectable()
export class RolesGuards implements CanActivate {
  constructor(
    private reflector: Reflector,
    private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    const bearer = authHeader?.split(' ')[1];

    if (!bearer) {
      tokenNoDecode();
    }

    const currentUser: User = await this.usersService.getUserByToken(bearer);

    if (!currentUser) {
      notAuth();
    }

    const currentRoles: any = currentUser.roles;

    return currentRoles.some((item: Roles) =>
      requiredRoles.includes(item.name),
    );
  }
}
