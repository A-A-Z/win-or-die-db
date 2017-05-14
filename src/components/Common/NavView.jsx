import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import 'font-awesome-loader'

let timeout = null

export default class NavView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeMenu1: -1,
      firstChild: null,
      menuItems: [
        {
          label: 'Episodes',
          subItems: [
            {
              label: 'Episode Index',
              icon: 'fa-list',
              url: '/episodes'
            },
            {
              label: 'Episode Index 2',
              icon: 'fa-list',
              url: '/episodes'
            },
            {
              label: 'Episode Index 3',
              icon: 'fa-list',
              url: '/episodes'
            }
          ]
        },
        {
          label: 'Characters',
          subItems: [
            {
              label: 'Characters Index',
              icon: 'fa-list',
              url: '/characters'
            },
            {
              label: 'Characters Index 2',
              icon: 'fa-list',
              url: '/characters'
            }
          ]
        },
        {
          label: 'Factions',
          subItems: [
            {
              label: 'Factions Index',
              icon: 'fa-list',
              url: '/factions'
            }
          ]
        },
        {
          label: 'Titles',
          subItems: []
        }
      ]
    }
    this.menuBlur = this.menuBlur.bind(this)
    this.menuKeypress = this.menuKeypress.bind(this)
    this.createParentMenuItem = this.createParentMenuItem.bind(this)
  }
  menuBlur () {
    const resetMenu = () => {
      this.setState({ activeMenu1: -1 })
    }

    timeout = setTimeout(resetMenu, 200)
  }
  menuKeypress (e) {
    switch (e.charCode) {
      case (0):
      case (13):
      case (32):
        e.preventDefault()
        this.state.firstChild.children[0].focus()
        clearTimeout(timeout)
        break

      default:
        // do nothing
    }
  }
  createParentMenuItem (index, menuItem, isActive) {
    const setActive = () => {
      clearTimeout(timeout)
      this.setState({
        activeMenu1: index
      })
    }

    return (
      <li
        key={'tier-1-' + index}
        className={classNames({ 'active': isActive })}
        tabIndex='0'
        role='button'
        aria-pressed={isActive ? 'true' : 'false'}
        onClick={setActive}
        onFocus={setActive}
        onBlur={this.menuBlur}
        onKeyPress={this.menuKeypress}
      >
        <span><i className='fa fa-shield' aria-hidden='true' /> {menuItem.label}</span>
      </li>)
  }
  createChildMenuItem (menuItem) {
    let tier2 = []

    if (menuItem.subItems.length > 0) {
      for (let i = 0; i < menuItem.subItems.length; i++) {
        let subItem = menuItem.subItems[i]
        if (i === 0) {
          tier2.push(<li key={'tier-2-' + i} ref={(input) => { this.state.firstChild = input }}><Link to={subItem.url}><i className={classNames('fa', subItem.icon)} aria-hidden='true' />{subItem.label}</Link></li>)
        } else {
          tier2.push(<li key={'tier-2-' + i}><Link to={subItem.url}><i className={classNames('fa', subItem.icon)} aria-hidden='true' />{subItem.label}</Link></li>)
        }
      }
    }

    return tier2
  }
  render () {
    let tier1 = []
    let tier2 = []
    let showTier2 = false

    for (let i = 0; i < this.state.menuItems.length; i++) {
      let isActive = (i === parseInt(this.state.activeMenu1))

      tier1.push(this.createParentMenuItem(i, this.state.menuItems[i], isActive))
      if (isActive) {
        showTier2 = true
        tier2 = this.createChildMenuItem(this.state.menuItems[i])
      }
    }

    return (
      <nav className='main-nav'>
        <div className='nav-tier nav-tier-1'>
          <ul>
            {tier1}
          </ul>
        </div>
        <div className={classNames('nav-tier', 'nav-tier-2', { 'active': showTier2 })}>
          <ul>
            {tier2}
          </ul>
        </div>
      </nav>
    )
  }
}
