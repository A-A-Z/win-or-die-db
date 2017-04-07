import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import {
  LandingContainer,
  CharactersListContainer,
  FactionsListContainer
} from './components'

import {
  CharacterDetailContainer
} from './components/Pages'

class App extends Component {
  render () {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <Route exact path='/' component={LandingContainer} />
          <Route path='/characters' component={CharactersListContainer} />
          <Route path='/character/:charKey' component={CharacterDetailContainer} />
          <Route path='/factions' component={FactionsListContainer} />
        </div>
      </Router>
    )
  }
}

export default App
