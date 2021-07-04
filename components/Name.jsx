import React from 'react'
import styled from 'styled-components'

const Details = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin: 20px;
  text-align: center;
  background-image: no-repeat scroll center top; 
  height: 100%;
`
export default ({ name }) => (
  <Details>{`${name}`}</Details>
)
