import React, { Component } from 'react'

import Data from '../../Data/Data'
import { FactionBlock } from './Views'

export default class FactionCharsContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      factions: []
    }
  }
  componentWillMount () {
    this.setState({
      factions: Data.getFactions()
    })
  }
  render () {
    let showHouseOnly = true

    return (
      <div className='container'>
        <h2>Factions by Characters</h2>
        {this.state.factions.map((faction, i) => {
          if ((showHouseOnly && faction.ishouse) || !showHouseOnly) {
            return (
              <FactionBlock
                key={'faction-' + faction.nameshort}
                factionData={faction}
                showHouseOnly={showHouseOnly}
              />
            )
          }
        })}
      </div>
    )
  }
}
