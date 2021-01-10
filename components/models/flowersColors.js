export default (connection, Sequelize, Genres, Novels) => connection.define('flowersColors', {
  flowerId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' } },
  colorId: { type: Sequelize.INTEGER, references: { model: Novels, key: 'id' } },
})
