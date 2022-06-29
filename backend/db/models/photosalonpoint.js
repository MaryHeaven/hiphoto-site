'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhotosalonPoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Staff, Request }) {
      // define association here
      PhotosalonPoint.hasMany(Order, { foreignKey: 'photosalon_point_id' });
      PhotosalonPoint.hasMany(Staff, { foreignKey: 'photosalon_point_id' });
      PhotosalonPoint.hasMany(Request, { foreignKey: 'photosalon_point_id' });
    }
  }
  PhotosalonPoint.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'PhotosalonPoint',
  });
  return PhotosalonPoint;
};
