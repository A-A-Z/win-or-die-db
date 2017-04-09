import React, { Component } from 'react'

import Data from '../../Data/Data'
import { SeasonView } from './Views'

export default class EpisodesListContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      episodes: {},
      seasonsNum: 0
    }
  }
  componentWillMount () {
    const episodes = Data.getEpisodes()
    this.setState({
      episodes: episodes,
      seasonsNum: Object.keys(episodes).length
    })
  }
  render () {
    let Seasons = []

    for (let i = 1; i <= this.state.seasonsNum; i++) {
      Seasons.push(
        <li key={'season-' + i}>
          <SeasonView
            seasonNum={i}
            seasonData={this.state.episodes[i]}
          />
        </li>
      )
    }

    return (
      <div className='container'>
        <h2>Episodes</h2>

        <ul>
          {Seasons}
        </ul>

      </div>
    )
  }
}
