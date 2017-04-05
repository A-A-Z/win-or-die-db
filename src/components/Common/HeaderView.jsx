import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HeaderView extends Component {
  render () {
    return (
      <header>
        <div className='container'>
          <h1 className='page-title'>
            <span className='large'>Win</span> or <span className='large'>Die</span> <span className='db'>DB</span>
          </h1>
          <nav>
            <Link to={`/`}>Home</Link>
          </nav>
        </div>
      </header>
    )
  }
}
