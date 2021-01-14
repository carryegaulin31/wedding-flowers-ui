import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Team = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`
const Link = styled(NavLink)`
  text-decoration: none;
`
export default ({ id, name }) => (
  <Team key={id}>
    <Link to={`/flowers/${id}`}>{`${name}`}</Link>
  </Team>
)
