import Sequelize from 'sequelize'
import allConfigs from '../configs/sequelize'
import ColorsModel from './colors'
import FlowersModel from './flowers'
import SeasonsModel from './seasons'
import FlowersColorsModel from './flowersColors'

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Colors = ColorsModel(connection, Sequelize)
const Seasons = SeasonsModel(connection, Sequelize)
const Flowers = FlowersModel(connection, Sequelize, Seasons)
const FlowersColors = FlowersColorsModel(connection, Sequelize, Colors, Flowers)

export default {
  Colors,
  Seasons,
  Flowers,
  FlowersColors,
  Sequelize
}