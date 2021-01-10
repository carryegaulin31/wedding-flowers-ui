import { response } from 'express'
import models from '../models'

export const getAllColors = async (request, response) => {
  const colors = await models.Colors.findAll()

  return response.send(colors)
}

export const getColorById = async (request, response) => {
  const { id } = request.params

  const color = await models.Colors.findOne({
    where: { id },
    include: [{ model: models.Flowers }]
  })

  return color
    ? response.send(color)
    : response.sendStatus(404)
}
