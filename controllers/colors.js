import models from '../models'

export const getAllColors = async (request, response) => {
  const colors = await models.Colors.findAll({
    include: [{ model: models.Flowers }],
  })
  return response.send(colors)
}

export const getColorByName = async (request, response) => {
  try {
    const { id } = request.params
    console.log(id)
    const color = await models.Colors.findOne({
      where: {
        id,
        /* [models.Sequelize.Op.or]: [

           { id: { [models.Sequelize.Op.like]: `%${id}%` } },
         ], */
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
