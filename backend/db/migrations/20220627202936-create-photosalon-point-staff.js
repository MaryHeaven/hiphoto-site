module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PhotosalonPointStaffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      photosalon_point_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'PhotosalonPoints',
          key: 'id',
        },
      },
      staff_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Staffs',
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
    await queryInterface.dropTable('PhotosalonPointStaffs');
  },
};
