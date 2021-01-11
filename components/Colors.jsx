import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Color from './Color'
import Search from './Search'

export default () => {
  const [name, setName] = useState('')
  const [colorList, setColorList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://localhost:1337/api/flowers')

      setColorList(data)
    }

    pullData()
  }, [])
  return (
    <div className="page">
      <div className="title">Wedding Flowers UI</div>
      <div className="subtitle">A searchable list of flowers by color to make your wedding perfect</div>
      <Search term={name} setter={setName} />
      {
        colorList.map(color => (<Color key={color.id} id={color.id} name={color.name} />))
      }
    </div>
  )
}
