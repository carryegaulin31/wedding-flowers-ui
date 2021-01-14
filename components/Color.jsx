import React from 'react'
import styled from 'styled-components'

const Team = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`
export default ({ id, name }) => (
  <div key={id}>{`${name}`}</div>
)
