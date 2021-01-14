import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Color = styled.div`
font-size: 20px;
margin-bottom: 10px;
font-style: italic;
color: mediumaquamarine;
`
const Link = styled(NavLink)`
  text-decoration: none;
`
export default ({ id, name }) => (
  <Color key={id}>
    <Link to={`/flowers/${id}`}>{`${name}`}</Link>
  </Color>
)
