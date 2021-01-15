export default (connection, Sequelize, Colors, Flowers) => connection.define('flowersColors', {
  flowerId: { type: Sequelize.INTEGER, references: { model: Flowers, key: 'id' } },
  colorId: { type: Sequelize.INTEGER, references: { model: Colors, key: 'id' } },
})
