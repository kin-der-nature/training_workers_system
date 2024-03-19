import { Questions } from 'src/questions/questions.model';
import {
  Model,
  Column,
  DataType,
  Table,
  BelongsToMany,
} from 'sequelize-typescript';
import { TestQuentions } from 'src/tests/model/test-quentions.model';
import { getSumNumbers } from 'src/helpers/numbers';
import { Questions_variant } from 'src/questions/variants.model';

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

  @Column({
    type: DataType.VIRTUAL,
    get(): number {
      const questions: Questions[] = this.getDataValue('questions');

      const allVariantsQuestions: Questions_variant[] = questions.reduce(
        (acc, item) => (acc = [...acc, ...item.variants]),
        [],
      );

      const allScoreVariants: number[] = allVariantsQuestions.map(
        (item) => item.counte,
      );

      return getSumNumbers(allScoreVariants);
    },
  })
  allScore: number;

  @BelongsToMany(() => Questions, () => TestQuentions)
  questions: Questions[];
}
