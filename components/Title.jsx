import React from 'react'

import styled from 'styled-components'

const Title = styled.div`
font-size: 40px;
font-weight: 600;
margin-bottom: 20px;
font-style: italic;
color:hotpink;
`

const Subtitle = styled.div`
font-size: 20px;
color: orchid;
font-style: italic;
`
export default () => (
  <>
    <Title>Wedding Flowers Source</Title>
    <Subtitle>A searchable list of flowers by color to make your wedding day exceptional</Subtitle>
  </>
)
