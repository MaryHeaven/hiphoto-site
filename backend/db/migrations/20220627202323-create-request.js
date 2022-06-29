module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      staff_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Staffs',
          key: 'id',
        },
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      photosalon_point_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'PhotosalonPoints',
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
    await queryInterface.dropTable('Requests');
  },
};
