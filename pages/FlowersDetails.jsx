import React, { useEffect, useState } from 'react'
import GoBack from '../components/GoBack'
import Color from '../components/NameLink'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import Name from '../components/Name'
import Title from '../components/Title'
import { retrieveFlowerWithAssociatedColors } from '../utils/flowers'

export default ({ location }) => {
  const [flowerName, setFlowerName] = useState('')
  const [flower, setFlower] = useState({})
  const [colorList, setColorList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { details, flowers } = await retrieveFlowerWithAssociatedColors(location)

      setFlowerName(details.name)
      setFlower(details)
      setColorList(flowers)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      <GoBack />
      {
        flowerName
          ? (
            <>
              <Name name={flower.name} />
              {colorList.map(color => (
                <Color
                  key={color.id}
                  id={color.id}
                  name={color.name}
                  path="colors"
                />
              ))}
            </>
          )
          : (<NotFound message="Sorry beautiful, I do not know that color" />)
      }
    </Page>
  )
}
