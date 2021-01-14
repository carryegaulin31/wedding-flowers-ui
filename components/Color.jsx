import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Team = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`
export default ({ id, name }) => (
  <Team key={id}>
    <NavLink to={`/colors/${id}`}>{`${name}`}</NavLink>
  </Team>
)
