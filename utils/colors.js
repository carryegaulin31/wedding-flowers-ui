import fetchColors from '../actions/colors'

export const filterColors = (list, term) => list.filter(color => (
  color.name.toLowerCase().includes(term.toLowerCase())
))

export const retrieveColors = async () => {
  const colors = await fetchColors()

  return colors
}
