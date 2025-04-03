import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../../core/database/config";

interface TaskAttributes {
  id: number;
  title: string;
  description?: string;
  userId: number;
}

interface TaskCreationAttributes extends Optional<TaskAttributes, "id"> {}

class Task
  extends Model<TaskAttributes, TaskCreationAttributes>
  implements TaskAttributes
{
  public id!: number;
  public title!: string;
  public description?: string;
  public userId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "task",
    timestamps: true,
  }
);

export default Task;
