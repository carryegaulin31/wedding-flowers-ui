import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(NavLink)`
  font-size: 20px;
  color: darkpink;
  font-weight: 400;
  margin: 20px 0;
  text-align: center;
  font-style: italic;
`

export default () => (
  <Link to="/">&lt;&lt; Go Back</Link>
)
