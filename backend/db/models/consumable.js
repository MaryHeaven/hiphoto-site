const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Consumable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ConsumableRequest }) {
      // define association here
      Consumable.belongsTo(ConsumableRequest, { foreignKey: 'consumable_id' });
    }
  }
  Consumable.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Consumable',
  });
  return Consumable;
};
