import React from 'react'
import Page from '../components/Page'
import Title from '../components/Title'
import GoBack from '../components/GoBack'
import ComingSoon from '../components/ComingSoon'

export default () => (
  <Page>
    <Title />
    <GoBack />
    <ComingSoon />
    <img src="../public/comingSoonPic.jpg" alt="lilac girl" />
  </Page>
)
