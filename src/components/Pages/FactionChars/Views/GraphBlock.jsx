import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import { Bar } from './'

export default class GraphBlock extends Component {
  render () {
    const showHouseOnly = true
    const factions = this.props.factions
    let hightestCount = 0

    factions.map((faction, i) => {
      if (((showHouseOnly && faction.ishouse) || !showHouseOnly) && faction.members.primary.length > hightestCount) {
        hightestCount = faction.members.primary.length
      }
    })

    return (
      <section className='graph-block'>
        <Scrollbars
          renderTrackHorizontal={({ style, ...props }) =>
            <div {...props} style={{ ...style }} className='graph-scroll-track' />
          }
          renderThumbHorizontal={({ style, ...props }) =>
            <div style={{ ...style }} {...props} className='graph-scroll-bar' />
          }
        >
          <ul className='bar-graph'>
            {factions.map((faction, i) => {
              if ((showHouseOnly && faction.ishouse) || !showHouseOnly) {
                return (
                  <Bar
                    key={'bar-' + faction.nameshort}
                    factionData={faction}
                    hightestCount={hightestCount}
                    seasion={this.props.seasion}
                    episode={this.props.episode}
                    setActiveFaction={this.props.setActiveFaction}
                  />
                )
              }
            })}
          </ul>
        </Scrollbars>
      </section>
    )
  }
}

// Property Type Validation
const { array, func, number } = React.PropTypes

GraphBlock.propTypes = {
  episode: number.isRequired,
  factions: array.isRequired,
  seasion: number.isRequired,
  setActiveFaction: func.isRequired
}
