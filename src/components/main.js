import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Home from './home'
import NotFound from './common/notFound'

export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={Home}/>
      <Route exact path='/portfolio' component={Home}/>
      <Route path="/*" component={NotFound}/>
    </Switch>
  </main>
)

export default Main
