import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Search from '../components/Search'
import ColorLink from '../components/NameLink'
import Title from '../components/Title'

import { filterColors, retrieveColors } from '../utils/colors'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [colorList, setColorList] = useState([])
  const [filteredColorList, setFilteredColorList] = useState([])
  useEffect(() => {
    async function pullData() {
      const colors = await retrieveColors()

      setColorList(colors)
      setFilteredColorList(colors)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterColors(colorList, searchTerm)

    setFilteredColorList(filtered)
  }, [searchTerm])

  return (
    <main>
      <Page>
        <Title />
        <Search term={searchTerm} setter={setSearchTerm} />
        {
          filteredColorList.map(color => (<ColorLink key={color.id} id={color.id} name={color.name} path="colors" />))
        }
      </Page>
    </main>
  )
}
