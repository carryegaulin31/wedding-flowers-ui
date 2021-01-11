import models from '../models'

export const getAllColors = async (request, response) => {
  const colors = await models.Colors.findAll()

  return response.send(colors)
}

export const getColorByName = async (request, response) => {
  const { name } = request.params

  const color = await models.Colors.findOne({
    where: {
      [models.Sequelize.Op.or]: [

        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ],
    },
    include: [{
      model: models.Flowers
    }],
  })

  return color
    ? response.send(color)
    : response.sendStatus(404)
}
