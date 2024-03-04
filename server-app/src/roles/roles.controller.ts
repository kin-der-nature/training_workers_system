import { RolesService } from './roles.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { createRoleDto } from './dto/create_role.dto';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  create(@Body() roleDto: createRoleDto) {
    return this.rolesService.createRole(roleDto);
  }

  @Get()
  getAll() {
    return this.rolesService.getAllRoles();
  }
}
