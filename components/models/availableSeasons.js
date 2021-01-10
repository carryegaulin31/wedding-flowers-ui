export default (connection, Sequelize) => connection.define('availableSeasons', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  season: { type: Sequelize.STRING, allowNull: false },
  note: { type: Sequelize.STRING, allowNull: false },
})
