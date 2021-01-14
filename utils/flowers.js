import fetchFlowersForColors from '../actions/flowers'

export const getColorNameFromUrl = location => (location && location.pathname
  ? location.pathname.split('/heroes/').pop()
  : ''
)

export const retrieveFlowers = async (location) => {
  const colorName = getColorNameFromUrl(location)

  if (!colorName) return { details: {}, flowers: [] }

  const { id, name, flowers } = await fetchFlowersForColors(colorName)

  if (!id || !name || !flowers) return { details: {}, flowers: [] }

  return { flowers, details: { id, name } }
}
