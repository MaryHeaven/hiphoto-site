const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PhotosalonPointStaff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Staff, PhotosalonPoint }) {
      // define association here
      PhotosalonPointStaff.hasMany(PhotosalonPoint, { foreignKey: 'photosalon_point_id' });
      PhotosalonPointStaff.hasMany(Staff, { foreignKey: 'staff_id' });
    }
  }
  PhotosalonPointStaff.init(
    {
      photosalon_point_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'PhotosalonPoints',
          key: 'id',
        },
      },
      staff_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Staffs',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'PhotosalonPointStaff',
    },
  );
  return PhotosalonPointStaff;
};
