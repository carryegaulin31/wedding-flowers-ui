import models from '../models'

export const getAllColors = async (request, response) => {
  const colors = await models.Colors.findAll({
    include: [{ model: models.Flowers }],
  })
  return response.send(colors)
}

export const getColorByName = async (request, response) => {
  try {
    const { name } = request.params

    const color = await models.Colors.findAll({
      where: {
        [models.Sequelize.Op.or]: [

          { name: { [models.Sequelize.Op.like]: `%${name}%` } },
        ],
      },
      include: [{
        model: models.Flowers,
      }],
    })

    return color
      ? response.send(color)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve hero, please try again')
  }
}
