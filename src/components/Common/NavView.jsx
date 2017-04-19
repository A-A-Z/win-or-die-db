import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'font-awesome-loader'

export default class NavView extends Component {
  render () {
    return (
      <nav className='main-nav'>
        <ul className='nav-tier-1'>
          <li>1 - 1</li>
          <li>1 - 2</li>
          <li>1 - 3</li>
        </ul>
        <ul className='nav-tier-2'>
          <li><Link to={`/`}><i className='fa fa-chevron-right' ariaHidden='true' /> 2 - 1</Link></li>
          <li><Link to={`/`}><i className='fa fa-chevron-right' ariaHidden='true' /> 2 - 2</Link></li>
          <li><Link to={`/`}><i className='fa fa-chevron-right' ariaHidden='true' /> 2 - 3</Link></li>
        </ul>
      </nav>
    )
  }
}
