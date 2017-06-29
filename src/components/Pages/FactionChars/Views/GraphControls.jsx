import React, { Component } from 'react'

import Data from '../../../Data/Data'

export default class GraphControls extends Component {
  constructor (props) {
    super(props)
    this.goToFirst = this.goToFirst.bind(this)
    this.goForward = this.goForward.bind(this)
  }

  goToFirst () {
    this.props.setActiveEp(1, 1)
  }

  goBack () {
    // this.props.goToFirstEp()
  }

  goForward () {
    const episodeIndex = this.props.episodes[this.props.activeSeasion][this.props.activeEpisode].epIndex
    const nextEp = Data.getEpisodeByIndex(episodeIndex + 1)
    console.log('next is', nextEp)
    if (nextEp != null) {
      this.props.setActiveEp(nextEp.season, nextEp.episode)
    }
  }

  render () {
    const episode = this.props.episodes[this.props.activeSeasion][this.props.activeEpisode]

    return (
      <div className='graph-controls'>
        <div className='controls-body'>
          <ul className='episode-controls'>
            <li className='direction-button' tabIndex='0' role='button' onClick={this.goToFirst}><i className='fa fa-fast-backward' aria-hidden='true' /></li>
            <li className='direction-button' tabIndex='0' role='button'><i className='fa fa-backward' aria-hidden='true' /></li>
            <li className='active-ep-title'>{this.props.activeSeasion} - {this.props.activeEpisode} {episode.title}</li>
            <li className='direction-button' tabIndex='0' role='button' onClick={this.goForward}><i className='fa fa-forward' aria-hidden='true' /></li>
            <li className='direction-button' tabIndex='0' role='button'><i className='fa fa-fast-forward' aria-hidden='true' /></li>
          </ul>
        </div>
      </div>
    )
  }
}

// Property Type Validation
const { func, number, object } = React.PropTypes

GraphControls.propTypes = {
  activeEpisode: number.isRequired,
  activeSeasion: number.isRequired,
  episodes: object.isRequired,
  setActiveEp: func.isRequired
}
