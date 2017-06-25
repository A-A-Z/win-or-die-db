import React, { Component } from 'react'

import Data from '../../../Data/Data'

export default class FactionBlock extends Component {
  render () {
    const faction = this.props.factionData
    let livingChars = []
    let deadChars = []

    for (let member of faction.members.primary) {
      const charData = Data.getCharacter(member)

      if (Data.isCharLiving(member)) {
        livingChars.push(<li key={'living-' + member}>{charData.namedisplay}</li>)
      } else {
        deadChars.push(<li key={'dead-' + member}>{charData.namedisplay}</li>)
      }
    }

    return (
      <div>
        <h3>{faction.namedisplay}</h3>

        Living ({livingChars.length})
        <ul>
          {livingChars}
        </ul>

        Dead ({deadChars.length})
        <ul>
          {deadChars}
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
