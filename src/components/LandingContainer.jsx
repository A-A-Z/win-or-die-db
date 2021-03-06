import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LandingContainer extends Component {
  render () {
    return (
      <div className='container'>

        <div className='row'>
          <div className='col s12'>This div is 12-columns wide</div>
          <div className='col s6'>This div is 6-columns wide</div>
          <div className='col s6'>This div is 6-columns wide</div>
        </div>

        <ul>
          <li>
            <Link to={`/characters`}>Characters</Link>
          </li>
          <li>
            <Link to={`/factions`}>Factions</Link>
          </li>
          <li>
            <Link to={`/episodes`}>Episodes</Link>
          </li>
        </ul>
      </div>
    )
  }
}
