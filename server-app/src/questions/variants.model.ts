import { Questions } from './questions.model';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'question-variants' })
export class Questions_variant extends Model<Questions_variant> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
  })
  counte: number;

  @ForeignKey(() => Questions)
  @Column({
    type: DataType.INTEGER,
  })
  quentions_id: number;

  @BelongsTo(() => Questions)
  questions: Questions;
}
