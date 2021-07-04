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
      <Name name={color.name} />
      <GoBack />
      {
        colorName
          ? (
            <>
              {flowerList.map(flower => (
                <Flower
                  key={flower.id}
                  id={flower.id}
                  name={flower.name}
                  slug={flower.slug}
                  path="flowers"
                />
              ))}
            </>
          )
          : (<NotFound message="Sorry beautiful, I have no flowers available in that color" />)
      }
    </Page>
  )
}
