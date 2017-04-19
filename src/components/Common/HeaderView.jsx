import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HeaderView extends Component {
  render () {
    return (
      <header className='main-header'>
        <div className='container'>
          <h1 className='page-title'>
            <Link to={`/`}><span className='large'>Win</span> or <span className='large'>Die</span> <span className='db'>DB</span></Link>
          </h1>
        </div>
      </header>
    )
  }
}
