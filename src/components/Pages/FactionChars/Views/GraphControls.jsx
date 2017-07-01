import React, { Component } from 'react'
import classNames from 'classnames'

import Data from '../../../Data/Data'
import { isActivateEvent } from '../../../Common/Helpers.jsx'

export default class GraphControls extends Component {
  constructor (props) {
    super(props)
    this.goToFirst = this.goToFirst.bind(this)
    this.goBack = this.goBack.bind(this)
    this.goForward = this.goForward.bind(this)
    this.goToLatest = this.goToLatest.bind(this)
  }

  goToFirst (e) {
    if (isActivateEvent(e) && !this.props.isFirstEpisode) {
      this.props.setActiveEp(1, 1)
    }
  }

  goBack (e) {
    if (isActivateEvent(e) && !this.props.isFirstEpisode) {
      const episodeIndex = this.props.episodes[this.props.activeSeasion][this.props.activeEpisode].epIndex
      const nextEp = Data.getEpisodeByIndex(episodeIndex - 1)
      if (nextEp != null) {
        this.props.setActiveEp(nextEp.season, nextEp.episode)
      }
    }
  }

  goForward (e) {
    if (isActivateEvent(e) && !this.props.isLastEpisode) {
      const episodeIndex = this.props.episodes[this.props.activeSeasion][this.props.activeEpisode].epIndex
      const nextEp = Data.getEpisodeByIndex(episodeIndex + 1)
      if (nextEp != null) {
        this.props.setActiveEp(nextEp.season, nextEp.episode)
      }
    }
  }

  goToLatest (e) {
    if (isActivateEvent(e) && !this.props.isLastEpisode) {
      this.props.setLatestAsActive()
    }
  }

  render () {
    const episode = this.props.episodes[this.props.activeSeasion][this.props.activeEpisode]

    return (
      <div className='graph-controls'>
        <div className='controls-body'>
          <ul className='episode-controls'>
            <li
              className={classNames('direction-button', { 'disabled': this.props.isFirstEpisode })}
              tabIndex='0'
              role='button'
              aria-label='Go to first episode'
              aria-disabled={this.props.isFirstEpisode}
              onClick={this.goToFirst}
              onKeyPress={this.goToFirst}
            ><i className='fa fa-fast-backward' aria-hidden='true' /></li>
            <li
              className={classNames('direction-button', { 'disabled': this.props.isFirstEpisode })}
              tabIndex='0'
              role='button'
              aria-label='Go to previous episode'
              aria-disabled={this.props.isFirstEpisode}
              onClick={this.goBack}
              onKeyPress={this.goBack}
            ><i className='fa fa-backward' aria-hidden='true' /></li>
            <li className='active-ep-title' aria-live='polite'>{this.props.activeSeasion} - {this.props.activeEpisode} {episode.title}</li>
            <li
              className={classNames('direction-button', { 'disabled': this.props.isLastEpisode })}
              tabIndex='0'
              role='button'
              aria-label='Go to next episode'
              aria-disabled={this.props.isLastEpisode}
              onClick={this.goForward}
              onKeyPress={this.goForward}
            ><i className='fa fa-forward' aria-hidden='true' /></li>
            <li
              className={classNames('direction-button', { 'disabled': this.props.isLastEpisode })}
              tabIndex='0'
              role='button'
              aria-label='Go to latest episode'
              aria-disabled={this.props.isLastEpisode}
              onClick={this.goToLatest}
              onKeyPress={this.goToLatest}
            ><i className='fa fa-fast-forward' aria-hidden='true' /></li>
          </ul>
        </div>
      </div>
    )
  }
}

// Property Type Validation
const { bool, func, number, object } = React.PropTypes

GraphControls.propTypes = {
  activeEpisode: number.isRequired,
  activeSeasion: number.isRequired,
  episodes: object.isRequired,
  isFirstEpisode: bool.isRequired,
  isLastEpisode: bool.isRequired,
  setActiveEp: func.isRequired,
  setLatestAsActive: func.isRequired
}
