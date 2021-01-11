import models from '../models'

export const getAllColors = async (request, response) => {
  const colors = await models.Colors.findAll()

  return response.send(colors)
}

export const getColorByNameOrId = async (request, response) => {
  const { id } = request.params

  const color = await models.Colors.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id },
        { name: { [models.Sequelize.Op.like]: `%${id}%` } },
      ],
    },
    include: [{ model: models.Flowers }, { model: models.Seasons }],
  })

  return color
    ? response.send(color)
    : response.sendStatus(404)
}
