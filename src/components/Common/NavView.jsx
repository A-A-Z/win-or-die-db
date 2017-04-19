import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// require('font-awesome-loader')
import 'font-awesome-loader'

export default class NavView extends Component {
  render () {
    return (
      <nav className='main-nav'>
        <ul className='nav-tier-1'>
          <li>1 - 1</li>
          <li>1 - 2</li>
          <li>1 - 3 <i className='fa fa-glass' /></li>
        </ul>
        <ul className='nav-tier-2'>
          <li>2 - 1</li>
          <li>2 - 2</li>
          <li>2 - 3</li>
        </ul>
      </nav>
    )
  }
}
