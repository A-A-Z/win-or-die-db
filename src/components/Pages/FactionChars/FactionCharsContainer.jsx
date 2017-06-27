import React, { Component } from 'react'

import Data from '../../Data/Data'
import { GraphBlock, FactionDetails } from './Views'

export default class FactionCharsContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeFaction: {},
      factions: []
    }

    this.setActiveFaction = this.setActiveFaction.bind(this)
  }
  componentWillMount () {
    this.setState({
      factions: Data.getFactions()
    })
  }
  setActiveFaction (factionKey) {
    let newFaction = Data.getFaction(factionKey)

    if (newFaction) {
      this.setState({
        activeFaction: newFaction
      })
    }
  }
  render () {
    return (
      <div style={{ position: 'relative' }}>
        <h2 className='graph-title'>Houses by Characters</h2>
        <GraphBlock
          factions={this.state.factions}
          setActiveFaction={this.setActiveFaction}
        />
        <FactionDetails
          factionData={this.state.activeFaction}
        />
      </div>
    )
  }
}
