import React, { Component } from 'react'

import Data from '../../Data/Data'
import { GraphBlock, GraphControls, FactionDetails } from './Views'

export default class FactionCharsContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeFaction: {},
      factions: [],
      episodes: [],
      seasion: 1,
      episode: 1,
      isFirstEpisode: true,
      isLastEpisode: false
    }

    this.setActiveFaction = this.setActiveFaction.bind(this)
    this.setActiveEp = this.setActiveEp.bind(this)
  }

  componentWillMount () {
    this.setState({
      factions: Data.getFactions(),
      episodes: Data.getEpisodes()
    })
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
        />
        <GraphBlock
          factions={this.state.factions}
          seasion={this.state.seasion}
          episode={this.state.episode}
          setActiveFaction={this.setActiveFaction}
        />
        <FactionDetails
          factionData={this.state.activeFaction}
          seasion={this.state.seasion}
          episode={this.state.episode}
        />
      </div>
    )
  }
}
