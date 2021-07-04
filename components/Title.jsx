import React from 'react'

import styled from 'styled-components'

const Title = styled.div`
font-size: 40px;
font-weight: 999;
margin-bottom: 20px;
font-style: Storybook;
color:lime;
`

const Subtitle = styled.div`
font-size: 20px;
font-weight: 999;
color: lime;
font-style: italic;
`
export default () => (
  <>
    <Title>Once-and-Floral</Title>
    <Subtitle>A searchable list of flowers by color to make your wedding day exceptional</Subtitle>
  </>
)
