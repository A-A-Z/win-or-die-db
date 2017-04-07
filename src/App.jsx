import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { HeaderView, FooterView } from './components/Common'

import {
  LandingContainer,
  CharactersListContainer
} from './components'

import {
  CharacterDetailContainer,
  FactionsListContainer
} from './components/Pages'

class App extends Component {
  render () {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <HeaderView />
          <main>
            <div>
              <Route exact path='/' component={LandingContainer} />
              <Route path='/characters' component={CharactersListContainer} />
              <Route path='/character/:charKey' component={CharacterDetailContainer} />
              <Route path='/factions' component={FactionsListContainer} />
            </div>
          </main>
          <FooterView />
        </div>
      </Router>
    )
  }
}

export default App
