const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Product, Post }) {
      // define association here
      Comment.belongsTo(User, { foreignKey: 'user_id' });
      Comment.belongsTo(Product, { foreignKey: 'product_id' });
      Comment.belongsTo(Post, { foreignKey: 'post_id' });
    }
  }
  Comment.init({
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Posts',
        key: 'id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
