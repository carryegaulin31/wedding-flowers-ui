import React from 'react'
import styled from 'styled-components'

const Flower = styled.div`
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`

export default ({ id, name, seasonId }) => (
  <Flower key={id}>
    {`${name} (${seasonId})`}
  </Flower>
)
