const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Comment }) {
      // define association here
      User.hasMany(Order, { foreignKey: 'user_id' });
      User.hasMany(Comment, { foreignKey: 'user_id' });
    }
  }
  User.init({
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    firstName: {
      type: DataTypes.TEXT,
    },
    lastName: {
      type: DataTypes.TEXT,
    },
    phone: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
