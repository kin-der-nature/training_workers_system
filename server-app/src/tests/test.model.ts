// import { createTestDto } from './dto/index.dto';
import { Model, Column, DataType, Table } from 'sequelize-typescript';

@Table({ tableName: 'tests' })
export class Test extends Model<Test> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
