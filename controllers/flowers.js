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
    return response.status(500).send('Unable to retrieve flower, please try again')
  }
}

export const saveNewFlower = async (request, response) => {
  try {
    const { name, seasonId, slug } = request.body

    if (!name || !seasonId || !slug) {
      return response
        .status(400)
        .send('The following fields are required: name, seasonId, slug')
    }

    const newFlower = await models.Flowers.create({

    })

    return response.status(201).send(newFlower)
  } catch (error) {
    return response.status(500).send('Unable to save new flower, please try again')
  }
}

export const deleteFlower = async (request, response) => {
  try {
    const { id } = request.params
    await models.FlowersColors.destroy({ where: { id } })
    await models.Flowers.destroy({ where: { id } })
    return response.sendStatus(204)
  } catch (error) {
    return response.status(500).send('Unable to delete flower, please try again')
  }
}
