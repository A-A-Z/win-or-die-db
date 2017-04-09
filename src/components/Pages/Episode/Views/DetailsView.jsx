import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DetailsView extends Component {
  addMove (enterOrExit, index, data) {
    const character = this.props.dataObj.getCharacter(data.char)
    return (
      <li key={enterOrExit + '-' + index}>
        <Link to={`/Character/${character.nameshort}`}>{character.namedisplay}</Link> {data.type}
      </li>
    )
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

      </div>
    )
  }
}

// Property Type Validation
const { func, number, object } = React.PropTypes

DetailsView.propTypes = {
  dataObj: func.isRequired,
  episode: object.isRequired,
  episodeNum: number.isRequired,
  seasonNum: number.isRequired
}
