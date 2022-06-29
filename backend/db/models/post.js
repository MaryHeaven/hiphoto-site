const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, Staff }) {
      // define association here
      Post.hasMany(Comment, { foreignKey: 'post_id' });
      Post.belongsTo(Staff, { foreignKey: 'staff_id' });
    }
  }
  Post.init({
    staff_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Staffs',
        key: 'id',
      },
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
