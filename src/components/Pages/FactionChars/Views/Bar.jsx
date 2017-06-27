import React, { Component } from 'react'

import Data from '../../../Data/Data'

export default class Bar extends Component {
  constructor (props) {
    super(props)
    this.setActive = this.setActive.bind(this)
    this.barKeypress = this.barKeypress.bind(this)
  }
  getHeight (value, total) {
    return (Math.round((value / total) * 100) + '%')
  }
  getMembersCount (faction) {
    let counts = {
      total: 0,
      living: 0,
      dead: 0
    }
    for (let member of faction.members.primary) {
      counts.total++
      if (Data.isCharLiving(member)) {
        counts.living++
      } else {
        counts.dead++
      }
    }
    return counts
  }
  setActive () {
    console.log('set active', this.props.factionData.nameshort)
    this.props.setActiveFaction(this.props.factionData.nameshort)
  }
  barKeypress (e) {
    switch (e.charCode) {
      case (0):
      case (13):
      case (32):
        e.preventDefault()
        this.setActive()
        break

      default:
        // do nothing
    }
  }
  render () {
    const faction = this.props.factionData
    const membersCount = this.getMembersCount(faction)

    let styleTotal = {
      height: this.getHeight(membersCount.total, this.props.hightestCount)
    }
    let styleLiving = {
      height: this.getHeight(membersCount.living, membersCount.total)
    }
    let styleDead = {
      height: this.getHeight(membersCount.dead, membersCount.total)
    }
    let labelArray = this.props.factionData.namedisplay.split(' ')

    return (
      <li className='bar'
        tabIndex='0'
        aria-label={this.props.factionData.namedisplay}
        onClick={this.setActive}
        onKeyPress={this.barKeypress}
      >
        <div className='bar-graphic bar-stacked'>
          <div className='bar-body' style={styleTotal}>
            <div className='bar-heading'>
              {membersCount.total}&nbsp;
              ( <span className='labl-style-living'>{membersCount.living}</span> / <span className='labl-style-dead'>{membersCount.dead}</span> )
            </div>
            <div className='bar-part bar-style-living' style={styleLiving} />
            <div className='bar-part bar-style-dead' style={styleDead} />
          </div>
        </div>
        <div className='bar-label'>
          <div className='house-label'>
            {labelArray.map((labelPart, i) => {
              return (
                <div key={'label-part-' + i}>{labelPart}</div>
              )
            })}
          </div>
          <div className={'house-bullet faction-' + this.props.factionData.nameshort} />
        </div>
      </li>
    )
  }
}

// Property Type Validation
const { func, number, object } = React.PropTypes

Bar.propTypes = {
  factionData: object.isRequired,
  hightestCount: number.isRequired,
  setActiveFaction: func.isRequired
}
