import React, { Component } from 'react'

import Data from '../../Data/Data'
import { GraphBlock, GraphControls, FactionDetails } from './Views'

export default class FactionCharsContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeFaction: null,
      factions: [],
      episodes: [],
      seasion: 1,
      episode: 1,
      isFirstEpisode: true,
      isLastEpisode: false
    }

    this.setActiveFaction = this.setActiveFaction.bind(this)
    this.setActiveEp = this.setActiveEp.bind(this)
    this.setLatestAsActive = this.setLatestAsActive.bind(this)
  }

  componentWillMount () {
    this.setState({
      factions: Data.getFactions(),
      episodes: Data.getEpisodes()
    })

    this.setLatestAsActive()
  }

  setActiveFaction (factionKey) {
    let newFaction = Data.getFaction(factionKey)

    if (newFaction) {
      this.setState({
        activeFaction: newFaction
      })
    }
  }

  setActiveEp (seasion, episode) {
    let isFirstEpisode = false
    let isLastEpisode = false

    if (seasion === 1 && episode === 1) {
      isFirstEpisode = true
    } else if (Data.isLastEpisode(seasion, episode)) {
      isLastEpisode = true
    }

    this.setState({
      seasion: seasion,
      episode: episode,
      isFirstEpisode: isFirstEpisode,
      isLastEpisode: isLastEpisode
    })
  }

  setLatestAsActive () {
    const latest = Data.getLastestEpisode()
    this.setState({
      seasion: latest.seasion,
      episode: latest.episode,
      isFirstEpisode: false,
      isLastEpisode: true
    })
  }

  render () {
    return (
      <div style={{ position: 'relative' }}>
        <h2 className='graph-title'>Houses by Characters</h2>
        <GraphControls
          activeEpisode={this.state.episode}
          activeSeasion={this.state.seasion}
          episodes={this.state.episodes}
          isFirstEpisode={this.state.isFirstEpisode}
          isLastEpisode={this.state.isLastEpisode}
          setActiveEp={this.setActiveEp}
          setLatestAsActive={this.setLatestAsActive}
        />
        <GraphBlock
          factions={this.state.factions}
          seasion={this.state.seasion}
          episode={this.state.episode}
          setActiveFaction={this.setActiveFaction}
        />
        {this.state.activeFaction != null &&
          <FactionDetails
            factionData={this.state.activeFaction}
            seasion={this.state.seasion}
            episode={this.state.episode}
          />
        }
      </div>
    )
  }
}
