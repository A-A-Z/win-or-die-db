import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Data from '../Data/Data'
import { CharDetailOverlay } from './'

export default class CharLink extends Component {
  render () {
    const character = Data.getCharacter(this.props.nameShort)
    return (
      <span style={{position: 'relative'}}>
        <Link to={`/Character/${character.nameshort}`} className='holds-overlay'>{character.namedisplay}</Link>
        <CharDetailOverlay nameShort={character.nameshort} />
      </span>
    )
  }
}

// Property Type Validation
const { string } = React.PropTypes

CharLink.propTypes = {
  nameShort: string.isRequired
}
