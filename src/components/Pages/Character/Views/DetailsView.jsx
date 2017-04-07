import React, { Component } from 'react'

export default class DetailsView extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.character.namedisplay}</h2>
        <p>
          {this.props.character.factions.primary.map((faction, i) => {
            return (
              <span key={faction.nameshort}>{faction.namedisplay} </span>
            )
          })}
        </p>
      </div>
    )
  }
}

// Property Type Validation
const { object } = React.PropTypes

DetailsView.propTypes = {
  character: object.isRequired
}
