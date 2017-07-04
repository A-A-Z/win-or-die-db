import React, { Component } from 'react'
import classNames from 'classnames'

export default class HouseLabel extends Component {
  render () {
    const factionData = this.props.factionData

    if (factionData.ishouse) { // if a house then format nicely
      const labelArray = factionData.namedisplay.split(' ', 2)
      return (
        <h3 className={classNames('house-label', this.props.labelSize)}>
          <div>House</div>
          <div>{labelArray[1]}</div>
        </h3>
      )
    } else { // if not a house so just return normal name
      return (
        <h3>{factionData.namedisplay}</h3>
      )
    }
  }
}

// Property Type Validation
const { object, oneOf } = React.PropTypes

HouseLabel.propTypes = {
  factionData: object.isRequired,
  labelSize: oneOf(['small', 'medium', 'large'])
}
