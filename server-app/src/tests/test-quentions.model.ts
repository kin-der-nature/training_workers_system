import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Test } from './test.model';
import { Questions } from 'src/questions/questions.model';

@Table({ tableName: 'test-quetions', createdAt: false, updatedAt: false })
export class TestQuentions extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Test)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  test_id: number;

  @ForeignKey(() => Questions)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quentions_id: number;
}
