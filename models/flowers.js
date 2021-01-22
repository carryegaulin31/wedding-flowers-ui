export default (connection, Sequelize, Seasons) => connection.define('flowers', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  seasonId: { type: Sequelize.INTEGER, references: { model: Seasons, key: 'id' } },
  slug: { type: Sequelize.STRING, allowNull: false },
})
