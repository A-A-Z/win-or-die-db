import React, { Component } from 'react'

import { CharPanel, MovePanel } from '../../../Common/'

export default class DetailsView extends Component {
  addMove (enterOrExit, index, data) {
    if (enterOrExit === 'exit') {
      return (
        <li key={enterOrExit + '-' + index} className='panel-block-line'>
          <CharPanel nameShort={data.char} />
          <MovePanel typeClass='exit' moveData={data} />
          <CharPanel nameShort={data.by} />
        </li>
      )
    } else {
      return (
        <li key={enterOrExit + '-' + index} className='panel-block-line'>
          <CharPanel nameShort={data.char} />
          <MovePanel typeClass='entrance' moveData={data} />
        </li>
      )
    }
  }
  render () {
    let Moves = []

    for (let [index, move] of this.props.episode.entrances.entries()) {
      Moves.push(this.addMove('entrance', index, move))
    }

    for (let [index, move] of this.props.episode.exits.entries()) {
      Moves.push(this.addMove('exit', index, move))
    }

    return (
      <div className='container'>
        <h2>{this.props.episode.title}</h2>
        Season {this.props.seasonNum}, Episode {this.props.episodeNum}

        <hr />

        <ul>
          {Moves}
        </ul>

        <hr style={{ clear: 'both' }} />

      </div>
    )
  }
}

// Property Type Validation
const { number, object } = React.PropTypes

DetailsView.propTypes = {
  episode: object.isRequired,
  episodeNum: number.isRequired,
  seasonNum: number.isRequired
}
