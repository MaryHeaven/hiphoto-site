'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ PhotosalonPoint, Staff, ConsumableRequest }) {
      // define association here
      Request.belongsTo(PhotosalonPoint, { foreignKey: 'photosalon_point_id' });
      Request.belongsTo(Staff, { foreignKey: 'staff_id' });
      Request.belongsTo(ConsumableRequest, { foreignKey: 'request_id' });
    }
  }
  Request.init({
    staff_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Staffs',
        key: 'id',
      },
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    photosalon_point_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'PhotosalonPoint',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};
