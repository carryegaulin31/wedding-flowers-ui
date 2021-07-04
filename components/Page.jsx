import React from 'react'

import styled from 'styled-components'

const Page = styled.div`
  margin: 60px auto 0;
  text-align: center;
  width: 100%;
  background-image:url("../lilacs.jpg");
  background-image: no-repeat scroll center top; 
`

export default ({ children }) => (
  <Page>{children}</Page>
)
