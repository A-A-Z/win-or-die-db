import React, { Component } from 'react'

import Data from '../../../Data/Data'

export default class FactionDetails extends Component {
  render () {
    const faction = this.props.factionData
    let title = 'none'
    let livingChars = []
    let deadChars = []

    if (faction.nameshort) {
      title = faction.namedisplay

      for (let member of faction.members.primary) {
        const charData = Data.getCharacter(member)

        if (Data.isCharLiving(member)) {
          livingChars.push(<li key={'living-' + member}>{charData.namedisplay}</li>)
        } else {
          deadChars.push(<li key={'dead-' + member}>{charData.namedisplay}</li>)
        }
      }
    }

    return (
      <section className='container'>
        <h3>Faction: {title}</h3>

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
