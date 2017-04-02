import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HeaderView extends Component {
  render () {
    return (
      <header>
        <h1>Win or Die DB</h1>
        <nav>
          <Link to={`/`}>Home</Link>
        </nav>
      </header>
    )
  }
}
