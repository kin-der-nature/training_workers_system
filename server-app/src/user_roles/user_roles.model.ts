import {
  Model,
  Column,
  DataType,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { Roles } from 'src/roles/roles.model';
import { User } from 'src/users/user.model';

interface createRoleDto {
  name: string;
  description: string;
}

@Table({ tableName: 'user-roles' })
export class UserRoles extends Model<UserRoles, createRoleDto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Roles)
  @Column({ type: DataType.INTEGER, unique: true, allowNull: false })
  role_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_Id: number;
}
