import models from '../models'

export const getAllSeasons = async (request, response) => {
  const seasons = await models.Seasons.findAll()

  return response.send(seasons)
}

export const getSeasonByName = async (request, response) => {
  const { id } = request.params

  const season = await models.Seasons.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id },
        { season: { [models.Sequelize.Op.like]: `%${id}%` } },
      ],
    },
    include: [{ model: models.Flowers }],
  })

  return season
    ? response.send(season)
    : response.sendStatus(404)
}
