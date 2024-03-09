import { Model } from 'sequelize';
import { Column, DataType } from 'sequelize-typescript';

export class Test extends Model<Test> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name: string;
}
