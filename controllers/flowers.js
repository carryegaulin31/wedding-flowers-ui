import models from '../models'

export const getAllFlowers = async (request, response) => {
  const flowers = await models.Flowers.findAll({
    include: [{ model: models.Colors }, { model: models.Seasons }],
  })

  return response.send(flowers)
}

export const getFlowerByNameOrId = async (request, response) => {
  const { name } = request.params

  const flower = await models.Flowers.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { name },
        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ],
    },
    include: [{ model: models.Colors }, { model: models.Seasons }],
  })

  return flower
    ? response.send(flower)
    : response.sendStatus(404)
}
