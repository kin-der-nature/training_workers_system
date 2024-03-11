import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { createQuestion } from './dto/index.dto';
import { Questions_variant } from './variants.model';

@Table({ tableName: 'questions' })
export class Questions extends Model<Questions, createQuestion> {
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

  @HasMany(() => Questions_variant)
  variants: Questions_variant[];
}
