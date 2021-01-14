import React from 'react'
import Page from '../components/Page'
import Title from '../components/Title'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [colorList, setColorList] = useState({})
  const [filteredColorList, setFilteredColorList] = useState([])

  return (
    <Page>
      <Title />
    </Page>
  )
}
