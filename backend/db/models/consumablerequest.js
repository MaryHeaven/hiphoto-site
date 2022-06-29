const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ConsumableRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Request, Consumable }) {
      // define association here
      ConsumableRequest.hasMany(Request, { foreignKey: 'request_id' });
      ConsumableRequest.hasMany(Consumable, { foreignKey: 'consumable_id' });
    }
  }
  ConsumableRequest.init({
    request_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Requests',
        key: 'id',
      },
    },
    consumable_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Consumables',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'ConsumableRequest',
  });
  return ConsumableRequest;
};
