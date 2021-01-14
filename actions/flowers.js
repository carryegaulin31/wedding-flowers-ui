import axios from 'axios'

export default async (name) => {
  const { data } = await axios.get(`${API_BASE_URL}/flowers/${name}`) // eslint-disable-line no-undef

  return data
}
