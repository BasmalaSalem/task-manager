import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../../core/database/config"; // Adjust the path based on your project structure

interface UserAttributes {
  id: number;
  email: string;
  password: string;
}

// Define creation attributes
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public email!: string;
  public password!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
    timestamps: true,
  }
);

export default User;

// // Define User attributes interface
// interface UserAttributes {
//   id: number;
//   email: string;
//   password: string;
// }

// // Define optional attributes (if any)
// interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// // Define User model class
// class User
//   extends Model<UserAttributes, UserCreationAttributes>
//   implements UserAttributes
// {
//   public id!: number;
//   public email!: string;
//   public password!: string;
// }

// // Initialize the User model
// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: "User",
//     tableName: "users", // Ensure this matches your actual table name
//     timestamps: true, // Enable timestamps if needed
//   }
// );

// export default User;
