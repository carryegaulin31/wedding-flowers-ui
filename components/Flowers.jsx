import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default () => {
  const [name, setName] = useState('')
  const [flower, setFlowerList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://localhost:1337/api/flowers')

      setFlowerList(data)
    }

    pullData()
  }, [])
  return (
    <div className="page">
      <div className="title">Wedding Flowers UI</div>
      <div className="subtitle">A searchable list of flowers to make your wedding perfect</div>
      <input type="text" name="search" onChange={event => setName(event.target.value)} />
      <div className="name">name</div>
    </div>
  )
}
