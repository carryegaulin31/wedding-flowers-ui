import axios from 'axios'

export const filterColors = (list, term) => list.filter(color => (
  color.name.toLowerCase().includes(term.toLowerCase())
))

export const retrieveColors = asyn() => {
  const { data } = await axios.get('http://localhost:1337/api/colors')

  return data
}
