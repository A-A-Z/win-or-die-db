import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import {
  LandingContainer,
  CharactersListContainer,
  FactionsListContainer
} from './components'

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <Route exact path='/' component={LandingContainer} />
          <Route path='/characters' component={CharactersListContainer} />
          <Route path='/factions' component={FactionsListContainer} />
        </div>
      </Router>
    )
  }
}

export default App
