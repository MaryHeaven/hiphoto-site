const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Category, OrderProduct, Comment, Staff,
    }) {
      // define association here
      Product.belongsTo(Category, { foreignKey: 'category_id' });
      Product.hasMany(OrderProduct, { foreignKey: 'product_id' });
      Product.hasMany(Comment, { foreignKey: 'product_id' });
      Product.belongsTo(Staff, { foreignKey: 'staff_id' });
    }
  }
  Product.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    category_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
      },
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    availability: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    item_per_lot: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price_per_lot: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    staff_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Staffs',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
