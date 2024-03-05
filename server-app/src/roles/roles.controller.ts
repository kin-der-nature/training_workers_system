import { RolesService } from './roles.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:value')
  getByRole(@Param('value') value: string) {
    return this.rolesService.getRoleByName(value);
  }
}
