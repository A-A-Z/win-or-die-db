import React, { Component } from 'react'

import Data from '../../../Data/Data'

export default class FactionBlock extends Component {
  render () {
    const faction = this.props.factionData
    let livingChars = []

    console.log('this.props.factionData', faction)

    for (let member of faction.members.primary) {
      const charData = Data.getCharacter(member)
      livingChars.push(<li>{charData.namedisplay}</li>)
    }

    return (
      <div>
        <h3>{faction.namedisplay}</h3>

        <ul>
          {livingChars}
        </ul>
      </div>
    )
  }
}

// Property Type Validation
const { object } = React.PropTypes

FactionBlock.propTypes = {
  factionData: object.isRequired
}
