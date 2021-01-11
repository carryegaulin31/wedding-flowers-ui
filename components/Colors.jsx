import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Color from './Color'
import Search from './Search'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [colorList, setColorList] = useState([])
  const [filteredColorList, setFilteredColorList] = useState([])
  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://localhost:1337/api/colors')

      setColorList(data)
      setFilteredColorList(data)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = colorList.filter(color => (
      color.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    setFilteredColorList(filtered)
  }, [searchTerm])

  return (
    <div className="page">
      <div className="title">Wedding Flowers UI</div>
      <div className="subtitle">A searchable list of flowers by color to make your wedding perfect</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredColorList.map(color => (<Color key={color.id} id={color.id} name={color.name} />))
      }
    </div>
  )
}
