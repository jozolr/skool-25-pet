'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tache', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      titre: {
        type: Sequelize.STRING,
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tache')
  }
};
