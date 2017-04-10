import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import Data from '../Data/Data'

export default class CharPanel extends Component {
  render () {
    const character = Data.getCharacter(this.props.nameShort)
    if (character === null) {
      return (
        <div className='panel-block char-panel'>
          <span className='panel-label'>[ Error ]</span>
        </div>
      )
    } else if (character.ischaracter) {
      let panelClasses = ['panel-block', 'char-panel']
      if (character.factions.primary.length > 0) {
        panelClasses.push('faction-' + character.factions.primary[0].nameshort)
      }
      return (
        <Link to={`/Character/${character.nameshort}`}>
          <div className={classNames(panelClasses)}>
            <span className='panel-label'>{character.namedisplay}</span>
          </div>
        </Link>
      )
    } else {
      return (
        <div className='panel-block char-panel'>
          <span className='panel-label'>{character.namedisplay}</span>
        </div>
      )
    }
  }
}

// Property Type Validation
const { string } = React.PropTypes

CharPanel.propTypes = {
  nameShort: string.isRequired
}
