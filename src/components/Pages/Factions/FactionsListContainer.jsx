import React, { Component } from 'react'

import Data from '../../Data/Data'

export default class FactionsListContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      factions: []
    }
  }
  componentWillMount () {
    Data.indexData()
    this.setState({
      factions: Data.getFactions()
    })
  }
  render () {
    return (
      <div className='container'>
        <h2>Factions</h2>

        <ul>
          {this.state.factions.map((faction, i) => {
            return (
              <li key={faction.nameshort}>
                <span className={`faction-panel faction-${faction.nameshort}`}>{faction.namedisplay}</span>
              </li>
            )
          })}
        </ul>

      </div>
    )
  }
}
