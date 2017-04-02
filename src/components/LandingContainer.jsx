import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class LandingContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to WoD DB</h2>
        </div>
        <ul>
          <li>
            <Link to={`/characters`}>Characters</Link>
          </li>
          <li>
            <Link to={`/factions`}>Factions</Link>
          </li>
        </ul>
      </div>
    )
  }
}
