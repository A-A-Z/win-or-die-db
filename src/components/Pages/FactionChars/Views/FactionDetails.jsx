import React, { Component } from 'react'
import classNames from 'classnames'

import Data from '../../../Data/Data'
import { CharLink, HouseLabel } from '../../../Common'

export default class FactionDetails extends Component {
  render () {
    const faction = this.props.factionData
    let livingChars = []
    let deadChars = []
    let livingColClasses = ['col']
    let deadColClasses = ['col']
    let hasLiving = false
    let hasDead = false

    for (let member of faction.members.primary) {
      const charData = Data.getCharacter(member)

      if (Data.isCharLiving(member, this.props.seasion, this.props.episode)) {
        livingChars.push(<li key={'living-' + member}><CharLink nameShort={charData.nameshort} /></li>)
        hasLiving = true
      } else {
        deadChars.push(<li key={'dead-' + member}><CharLink nameShort={charData.nameshort} /></li>)
        hasDead = true
      }
    }

    if (hasLiving) {
      deadColClasses.push('m6')
    } else {
      livingColClasses.push('hide')
      deadColClasses.push('m12')
    }

    if (hasDead) {
      livingColClasses.push('m6')
    } else {
      deadColClasses.push('hide')
      livingColClasses.push('m12')
    }

    return (
      <section className='container' style={{paddingTop: '20px', textAlign: 'center'}}>
        <HouseLabel
          factionData={this.props.factionData}
          labelSize='large'
        />
        <div className={'house-bullet faction-' + this.props.factionData.nameshort} />

        <div className='row'>
          <div className={classNames(livingColClasses)}>
            <div style={{padding: '0 15px'}}>
              <h4 className='list-heading'>Living ({livingChars.length})</h4>
              <ul className='centered-items'>
                {livingChars}
              </ul>
            </div>
          </div>
          <div className={classNames(deadColClasses)}>
            <div style={{padding: '0 15px'}}>
              <h4 className='list-heading'>Dead ({deadChars.length})</h4>
              <ul className='centered-items'>
                {deadChars}
              </ul>
            </div>
          </div>
          {(!hasLiving && !hasDead) &&
            <p>
              <em>No members</em>
            </p>
          }
        </div>

      </section>
    )
  }
}

// Property Type Validation
const { object, number } = React.PropTypes

FactionDetails.propTypes = {
  episode: number.isRequired,
  factionData: object.isRequired,
  seasion: number.isRequired
}
