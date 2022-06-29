module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ConsumableRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      request_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Requests',
          key: 'id',
        },
      },
      consumable_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Consumables',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ConsumableRequests');
  },
};
