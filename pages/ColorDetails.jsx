import React, { useEffect, useState } from 'react'
import GoBack from '../components/GoBack'
import Flower from '../components/NameLink'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import Name from '../components/Name'
import Title from '../components/Title'
import { retrieveColorWithAssociatedFlowers } from '../utils/colors'

export default ({ location }) => {
  const [colorName, setColorName] = useState('')
  const [color, setColor] = useState({})
  const [flowerList, setFlowerList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { details, flowers } = await retrieveColorWithAssociatedFlowers(location)

      setColorName(details.name)
      setColor(details)
      setFlowerList(flowers)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      <GoBack />
      {
        colorName
          ? (
            <>
              <Name name={color.name} />
              {flowerList.map(flower => (
                <Flower
                  key={flower.id}
                  id={flower.id}
                  name={flower.name}
                  path="flowers"
                />
              ))}
            </>
          )
          : (<NotFound message="Sorry beautiful, I do not know that color" />)
      }
    </Page>
  )
}
