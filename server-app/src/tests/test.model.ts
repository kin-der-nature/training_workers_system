import { Questions } from './../questions/questions.model';
import {
  Model,
  Column,
  DataType,
  Table,
  BelongsToMany,
} from 'sequelize-typescript';
import { TestQuentions } from './test-quentions.model';

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

  @BelongsToMany(() => Questions, () => TestQuentions)
  questions: Questions[];
}
