import React, { Component } from 'react'

import Data from '../../../Data/Data'
import { getHouseLabel } from '../../../Common/Helpers.jsx'

export default class FactionDetails extends Component {
  render () {
    const faction = this.props.factionData
    let title = getHouseLabel(faction, 'large')
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
      <section className='container'>
        {title}

        <div className='row'>
          <div className='col m6'>
            <h4>Living: {livingChars.length}</h4>
            <ul>
              {livingChars}
            </ul>
          </div>
          <div className='col m6'>
            <h4>Dead: {deadChars.length}</h4>
            <ul>
              {deadChars}
            </ul>
          </div>
        </div>

      </section>
    )
  }
}

// Property Type Validation
const { object } = React.PropTypes

FactionDetails.propTypes = {
  factionData: object.isRequired
}
