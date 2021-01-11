import models from '../models'

export const getAllSeasons = async (request, response) => {
  const seasons = await models.Seasons.findAll()

  return response.send(seasons)
}

export const getSeasonByName = async (request, response) => {
  const { season } = request.params

  const seasonName = await models.Seasons.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { season },
        { season: { [models.Sequelize.Op.like]: `%${season}%` } },
      ],
    },
    include: [{
      model: models.Flowers,
      include: [{ model: models.Colors }],
    }],
  })

  return seasonName
    ? response.send(seasonName)
    : response.sendStatus(404)
}
