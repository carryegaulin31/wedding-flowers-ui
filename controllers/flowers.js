import models from '../models'

export const getAllFlowers = async (request, response) => {
  const flowers = await models.Flowers.findAll({
    include: [{ model: models.Colors }, { model: models.Seasons }],
  })

  return response.send(flowers)
}

export const getFlowerByName = async (request, response) => {
  try {
    const { name } = request.params

    const flower = await models.Flowers.findAll({
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
  } catch (error) {
    return response.status(500).send('Unable to retrieve hero, please try again')
  }
}

export const saveNewFlower = async (request, response) => {
  try {
    const { name, seasonId } = request.body

    if (!name || !seasonId) {
      return response
        .status(400)
        .send('The following fields are required: name, seasonId')
    }

    const newFlower = await models.Flowers.create({

    })

    return response.status(201).send(newFlower)
  } catch (error) {
    return response.status(500).send('Unable to save new flower, please try again')
  }
}
