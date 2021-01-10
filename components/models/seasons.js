export default (connection, Sequelize) => connection.define('seasons', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  season: { type: Sequelize.STRING, allowNull: false },
  note: { type: Sequelize.STRING, allowNull: false },
})
