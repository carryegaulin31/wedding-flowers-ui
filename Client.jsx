import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Colors from './components/Colors'

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Colors} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
