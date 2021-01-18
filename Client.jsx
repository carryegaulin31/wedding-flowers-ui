import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorPage from './pages/Error'
import ColorDetailsPage from './pages/ColorDetails'
import ColorsPage from './pages/Colors'
// import FlowersDetailsPage from './pages/FlowersDetails'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/colors" component={ColorDetailsPage} />
      <Route exact path="/" component={ColorsPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
