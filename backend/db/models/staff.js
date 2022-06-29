const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Post, Product, Request,
    }) {
      // define association here
      Staff.hasMany(Post, { foreignKey: 'staff_id' });
      Staff.hasMany(Product, { foreignKey: 'staff_id' });
      Staff.hasMany(Request, { foreignKey: 'staff_id' });
    }
  }
  Staff.init({
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    position: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Staff',
  });
  return Staff;
};
