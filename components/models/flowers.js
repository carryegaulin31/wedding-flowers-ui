export default (connection, Sequelize, AvailableSeasons) => connection.define('flowers', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  seasonId: { type: Sequelize.INTEGER, references: { model: Authors, key: 'id' } },
})
