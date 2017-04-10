import React, { Component } from 'react'

export default class MovePanel extends Component {
  render () {
    if (this.props.typeClass === 'exit') {
      let byText = (this.props.moveData.by !== 'none') ? ' by' : ''

      return (
        <div className={'panel-block move-panel move-class-' + this.props.typeClass}>
          <span className='panel-label'>
            {this.props.moveData.type}{byText}<br />
            <small>({this.props.moveData.method})</small>
          </span>
        </div>
      )
    } else {
      return (
        <div className={'panel-block move-panel move-class-' + this.props.typeClass}>
          <span className='panel-label'>{this.props.moveData.type}</span>
        </div>
      )
    }
  }
}

// Property Type Validation
const { object, string } = React.PropTypes

MovePanel.propTypes = {
  typeClass: string.isRequired,
  moveData: object.isRequired
}
