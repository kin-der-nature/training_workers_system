import { Model, Column, DataType, Table } from 'sequelize-typescript';

interface createRoleDto {
  name: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Roles extends Model<Roles, createRoleDto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING(200), allowNull: false })
  description: string;
}
