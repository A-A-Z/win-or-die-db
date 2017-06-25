import React, { Component } from 'react'

import Data from '../../../Data/Data'
import { Bar } from './'

export default class GraphBlock extends Component {
  getFactionsData () {
    return Data.getFactions()
  }
  render () {
    const showHouseOnly = true
    const factions = this.getFactionsData()
    let hightestCount = 0

    factions.map((faction, i) => {
      if (((showHouseOnly && faction.ishouse) || !showHouseOnly) && faction.members.primary.length > hightestCount) {
        hightestCount = faction.members.primary.length
      }
    })

    return (
      <section className='graph-block'>
        <ul className='bar-graph'>
          {factions.map((faction, i) => {
            if ((showHouseOnly && faction.ishouse) || !showHouseOnly) {
              return (
                <Bar
                  key={'bar-' + faction.nameshort}
                  barLabel={faction.namedisplay}
                  hightestCount={hightestCount}
                  factionKey={faction.nameshort}
                  factionData={faction}
                />
              )
            }
          })}
        </ul>
      </section>
    )
  }
}
