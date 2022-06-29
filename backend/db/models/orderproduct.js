'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Product }) {
      // define association here
      OrderProduct.belongsTo(Order, { foreignKey: 'order_id' });
      OrderProduct.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  OrderProduct.init({
    order_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
        key: 'id',
      },
    },
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'OrderProduct',
  });
  return OrderProduct;
};