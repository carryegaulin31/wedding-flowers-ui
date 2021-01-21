import axios from 'axios'

export const fetchColors = async () => {
  const { data } = await axios.get('http://localhost:1337/api/flowers')

  return data
}

export const fetchColorAndFlowers = async (name) => {
  const { data } = await axios.get(`${API_BASE_URL}/flowers/${name}`) // eslint-disable-line no-undef

  return data
}
