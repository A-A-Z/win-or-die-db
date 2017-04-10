import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Data from '../Data/Data'

export default class CharPanel extends Component {
  render () {
    const character = Data.getCharacter(this.props.nameShort)
    return (
      <Link to={`/Character/${character.nameshort}`}>
        <div className='panel-block char-panel'>
          <span className='panel-label'>{character.namedisplay}</span>
        </div>
      </Link>
    )
  }
}

// Property Type Validation
const { string } = React.PropTypes

CharPanel.propTypes = {
  nameShort: string.isRequired
}
