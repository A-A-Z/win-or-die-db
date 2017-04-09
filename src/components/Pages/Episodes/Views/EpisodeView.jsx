import React, { Component } from 'react'

export default class EpisodeView extends Component {
  render () {
    return (
      <div>
        {this.props.episodeNum} ) {this.props.episodeData.title}
      </div>
    )
  }
}

// Property Type Validation
const { number, object } = React.PropTypes

EpisodeView.propTypes = {
  episodeData: object.isRequired,
  episodeNum: number.isRequired
}
