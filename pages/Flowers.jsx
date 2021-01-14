import React, { useEffect, useState } from 'react'
import Flower from '../components/Flower'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import ColorDetails from '../components/ColorDetails'
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
          ? (
            <>
              <ColorDetails name={color.name} />
              {flowerList.map(flower => (
                <Flower
                  key={flower.id}
                  id={flower.id}
                  name={flower.name}
                  seasonId={flower.seasonId}
                />
              ))}
            </>
          )
          : (<NotFound message="Sorry beautiful, I do not knpw that color" />)
      }
    </Page>
  )
}
