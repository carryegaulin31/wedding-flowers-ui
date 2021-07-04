import axios from 'axios'

export const fetchColors = async () => {
  const { data } = await axios.get('http://localhost:1337/api/colors')

  return data
}

export const fetchColorAndFlowers = async (id) => {
  const { data } = await axios.get(`${API_BASE_URL}/colors/${id}`) // eslint-disable-line no-undef

  return data
}
