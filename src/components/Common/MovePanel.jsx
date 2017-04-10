import React, { Component } from 'react'

export default class MovePanel extends Component {
  render () {
    return (
      <div className={'panel-block move-panel move-class-' + this.props.typeClass}>
        <span className='panel-label'>{this.props.typeLabel}</span>
      </div>
    )
  }
}

// Property Type Validation
const { string } = React.PropTypes

MovePanel.propTypes = {
  typeClass: string.isRequired,
  typeLabel: string.isRequired
}
