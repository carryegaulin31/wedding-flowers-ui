import { response } from 'express'
import models from '../models'

export const getAllFlowers = async (request, response) => {
  const flowers = await models.Flowers.findAll({
    include: [{ model: models.Colors }, { model: models.Seasons }],
  })

  return response.send(flowers)
}

export const getFlowerByNameOrId = async (request, respond) => {
  const { id } = request.params

  const flower = await models.Flowers.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id },
        { name: { [models.Sequelize.Op.like]: `%${id}%` } },
      ],
    },
    include: [{ model: models.Colors }, { model: models.Seasons }],
  })

  return flower
    ? response.send(flower)
    : response.sendStatus(404)
}
