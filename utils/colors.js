import { fetchColors, fetchColorAndFlowers } from '../actions/colors'

export const getColorNameFromUrl = location => (location && location.pathname
  ? location.pathname.split('/colors/').pop()
  : ''
)
export const filterColors = (list, term) => list.filter(color => color.name.toLowerCase().includes(term.toLowerCase()))

export const retrieveColors = async () => {
  const colors = await fetchColors()

  return colors
}

export const retrieveColorWithAssociatedFlowers = async (location) => {
  const colorName = getColorNameFromUrl(location)

  if (!colorName) return { details: {}, flowers: [] }

  const { id, name, flowers } = await fetchColorAndFlowers(colorName)

  if (!id || !name || !flowers) return { details: {}, flowers: [] }

  return { flowers, details: { id, name } }
}
