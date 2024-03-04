import {
  Model,
  Column,
  DataType,
  BelongsToMany,
  Table,
} from 'sequelize-typescript';
import { Roles } from 'src/roles/roles.model';
import { UserRoles } from 'src/user_roles/user_roles.model';

interface UserCreateDto {
  login: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreateDto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(() => Roles, () => UserRoles)
  roles: Roles[];
}
