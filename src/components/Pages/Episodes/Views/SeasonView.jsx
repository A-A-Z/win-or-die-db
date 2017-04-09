import React, { Component } from 'react'

import { EpisodeView } from './'

export default class SeasonView extends Component {
  render () {
    let EpisodesList = []
    const epCount = Object.keys(this.props.seasonData).length

    for (let i = 1; i <= epCount; i++) {
      EpisodesList.push(
        <li key={'s' + this.props.seasonNum + '-e' + i}>
          <EpisodeView
            episodeNum={i}
            episodeData={this.props.seasonData[i]}
          />
        </li>
      )
    }

    return (
      <div>
        <h3>Season {this.props.seasonNum}</h3>
        <ol>
          {EpisodesList}
        </ol>
      </div>
    )
  }
}

// Property Type Validation
const { number, object } = React.PropTypes

SeasonView.propTypes = {
  seasonData: object.isRequired,
  seasonNum: number.isRequired
}
