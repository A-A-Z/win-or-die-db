import React, { Component } from 'react'

import Data from '../Data/Data'

export default class CharDetailOverlay extends Component {
  formatFaction (factions, type) {
    let thisFactionList = []

    for (let faction of factions[type]) {
      thisFactionList.push(
        <li key={'fact-' + type + '-' + faction.nameshort}>
          <div className={'house-bullet faction-' + faction.nameshort} style={{display: 'inline-block'}} /> {faction.namedisplay}
        </li>
      )
    }

    return thisFactionList
  }

  render () {
    const character = Data.getCharacter(this.props.nameShort)
    const isCharLiving = Data.isCharLiving(character.nameshort)

    return (
      <div className='info-overlay char-detail-overlay'>
        <div>{character.namedisplay}</div>
        <div>{character.gender}</div>
        <div>{(isCharLiving) ? 'Alive' : 'Dead'}</div>
        <ul>
          {this.formatFaction(character.factions, 'primary')}
        </ul>
        <ul>
          {this.formatFaction(character.factions, 'secondary')}
        </ul>
      </div>
    )
  }
}

// Property Type Validation
const { string } = React.PropTypes

CharDetailOverlay.propTypes = {
  nameShort: string.isRequired
}
