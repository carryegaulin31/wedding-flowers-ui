import models from '../models'

export const getAllFlowers = async (request, response) => {
  const flowers = await models.Flowers.findAll({
    include: [{ model: models.Colors }, { model: models.Seasons }],
  })

  return response.send(flowers)
}

export const getFlowerByName = async (request, response) => {
  try {
    const { id } = request.params

    const flower = await models.Flowers.findAll({
      attributes: ['name', 'seasonId', 'slug'],
      through: { attributes: [] },
      where: {
        [models.Sequelize.Op.or]: [
          { id },
          { name: { [models.Sequelize.Op.like]: `%${id}%` } },
        ],
      },
      include: [{
        attributes: ['name'],
        model: models.Colors,
        through: { attributes: [] },
      }],
    },
    {
      attributes: ['season'],
      model: models.Seasons,
      through: { attributes: [] },
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

    const newFlower = await models.Flowers.create({ name, seasonId, slug })

    return response.status(201).send(newFlower)
  } catch (error) {
    return response.status(500).send('Unable to save new flower, please try again')
  }
}

export const deleteFlower = async (request, response) => {
  try {
    const { id } = request.params
    await models.Flowers.destroy({ where: { id } })
    await models.Flowers.destroy({ where: { id } })
    return response.sendStatus(204)
  } catch (error) {
    return response.status(500).send('Unable to delete flower, please try again')
  }
}
