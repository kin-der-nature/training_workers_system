import { Column, DataType, Model } from 'sequelize-typescript';

export class Questions extends Model<Questions> {
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
}
