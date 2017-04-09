import React, { Component } from 'react'

import Data from '../../Data/Data'
import { DetailsView } from './Views'
import { NotFoundView } from '../../Common'

export default class EpisodeDetailContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loadState: 0,
      episode: {},
      seasonNum: 0,
      episodeNum: 0,
      dataObj: null
    }
  }
  componentWillMount () {
    Data.indexData()
    const params = this.props.match.params
    const seasonNum = parseInt(params.seasonNum)
    const episodeNum = parseInt(params.episodeNum)
    const episode = Data.getEpisode(seasonNum, episodeNum)

    if (Number.isNaN(seasonNum) || Number.isNaN(episodeNum) || episode === null) {
      this.setState({
        loadState: 2
      })
    } else {
      this.setState({
        loadState: 1,
        episode: episode,
        seasonNum: seasonNum,
        episodeNum: episodeNum,
        dataObj: Data
      })
    }
  }
  render () {
    switch (this.state.loadState) {
      case (2):
        return <NotFoundView />

      case (1):
        return (
          <DetailsView
            episode={this.state.episode}
            seasonNum={this.state.seasonNum}
            episodeNum={this.state.episodeNum}
            dataObj={this.state.dataObj}
          />
        )

      case (0):
      default:
        return (<div>Loading...</div>)
    }
  }
}

// Property Type Validation
const { string, shape } = React.PropTypes

EpisodeDetailContainer.propTypes = {
  match: shape({
    params: shape({
      episodeNum: string.isRequired,
      seasonNum: string.isRequired
    })
  })
}
