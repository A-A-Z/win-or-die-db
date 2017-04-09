import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Data from '../Data/Data'

export default class CharLink extends Component {
  render () {
    const character = Data.getCharacter(this.props.nameShort)
    return (
      <Link to={`/Character/${character.nameshort}`}>{character.namedisplay}</Link>
    )
  }
}

// Property Type Validation
const { string } = React.PropTypes

CharLink.propTypes = {
  nameShort: string.isRequired
}
