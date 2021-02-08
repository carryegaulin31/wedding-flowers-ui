export default (connection, Sequelize, Flowers, Colors) => connection.define('flowersColors', {
  flowerId: { type: Sequelize.INTEGER, references: { model: Flowers, key: 'id' } },
  colorId: { type: Sequelize.INTEGER, references: { model: Colors, key: 'id' } },
})
