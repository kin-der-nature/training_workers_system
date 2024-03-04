import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './roles.model';
import { createRoleDto } from './dto/create_role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Roles)
    private rolesRepository: typeof Roles,
  ) {}

  getAllRoles() {
    const roles = this.rolesRepository.findAll();

    return roles;
  }

  createRole(dto: createRoleDto) {
    const Roles = this.rolesRepository.create(dto);

    return Roles;
  }
}
