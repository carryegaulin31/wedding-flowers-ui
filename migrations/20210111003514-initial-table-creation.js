module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('seasons', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      season: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('colors', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('flowers', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      seasonId: { type: Sequelize.INTEGER, references: { model: 'seasons', key: 'id' } },
      slug: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })

    return queryInterface.createTable('flowersColors', {
      colorId: { type: Sequelize.INTEGER, references: { model: 'colors', key: 'id' } },
      flowerId: { type: Sequelize.INTEGER, references: { model: 'flowers', key: 'id' } },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('flowersColors')
    await queryInterface.dropTable('flowers')
    await queryInterface.dropTable('colors')

    return queryInterface.dropTable('seasons')
  },
}
