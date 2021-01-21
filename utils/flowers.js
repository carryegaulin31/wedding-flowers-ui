import { fetchFlowers, fetchFlowerAndColors } from '../actions/flowers'

export const getFlowerNameFromUrl = location => (location && location.pathname
  ? location.pathname.split('/flowers/').pop()
  : ''
)
export const filterColors = (list, term) => list.filter(flowerr => flower.name.toLowerCase().includes(term.toLowerCase()))

export const retrieveFlowers = async () => {
  const colors = await fetchFlowers()

  return colors
}

export const retrieveFlowerWithAssociatedColors = async (location) => {
  const flowerName = getFlowerNameFromUrl(location)

  if (!flowerName) return { details: {}, colors: [] }

  const { id, name, colors } = await fetchFlowerAndColors(flowerName)

  if (!id || !name || !colors) return { details: {}, colors: [] }

  return { colors, details: { id, name } }
}
