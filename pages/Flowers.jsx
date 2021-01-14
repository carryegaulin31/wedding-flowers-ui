import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Title from '../components/Title'
import { retrieveFlowers } from '../utils/flowers'

export default ({ location }) => {
  const [colorName, setColorName] = useState('')
  const [color, setColor] = useState({})
  const [flowerList, setFlowerList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { details, flowers } = await retrieveFlowers(location)

      setColorName(details.name)
      setColor(details)
      setFlowerList(flowers)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      {
        colorName
          ? (<div>{color.name}</div>)
          : (<div>Sorry gorgeous, I do not knpw that color</div>)
      }
    </Page>
  )
}
