import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { HeaderView } from './Common'

export default class LandingContainer extends Component {
  render () {
    return (
      <main>
        <HeaderView />
        <ul>
          <li>
            <Link to={`/characters`}>Characters</Link>
          </li>
          <li>
            <Link to={`/factions`}>Factions</Link>
          </li>
        </ul>
      </main>
    )
  }
}
