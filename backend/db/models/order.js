'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, OrderProduct, PhotosalonPoint }) {
      // define association here
      Order.belongsTo(User, { foreignKey: 'user_id' });
      Order.hasMany(OrderProduct, { foreignKey: 'order_id' });
      Order.belongsTo(PhotosalonPoint, { foreignKey: 'photosalon_point_id' });
    }
  }
  Order.init({
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    photosalon_point_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'PhotosalonPoints',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};