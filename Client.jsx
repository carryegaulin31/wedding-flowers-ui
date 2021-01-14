import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorPage from './pages/Error'
import FlowersPage from './pages/Flowers'
import ColorsPage from './pages/Colors'

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/flowers" component={FlowersPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
