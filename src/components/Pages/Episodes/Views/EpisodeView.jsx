import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EpisodeView extends Component {
  render () {
    return (
      <div>
        <Link to={`/episode/${this.props.seasonNum}/${this.props.episodeNum}`}>{this.props.episodeNum} ) {this.props.episodeData.title}</Link>
      </div>
    )
  }
}

// Property Type Validation
const { number, object } = React.PropTypes

EpisodeView.propTypes = {
  episodeData: object.isRequired,
  episodeNum: number.isRequired,
  seasonNum: number.isRequired
}
