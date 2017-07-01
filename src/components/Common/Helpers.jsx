import React from 'react'

const getHouseLabel = (factionData, labelSize) => {
  console.log('getHouseLabel', factionData)

  // not a house so just return normal name
  if (!factionData.ishouse) {
    return (<div>{factionData.namedisplay}</div>)
  }

  let labelArray = factionData.namedisplay.split(' ', 2)

  return (
    <div className='house-label'>
      <div>House</div>
      <div>{labelArray[1]}</div>
    </div>
  )
}

// Test to see if event was a click or a keydown for enter or space
const isActivateEvent = (e) => {
  if (e.type === 'click') {
    return true
  } else if (e.type === 'keypress') {
    switch (e.charCode) {
      case (0):
      case (13):
      case (32):
        e.preventDefault()
        return true

      default:
        // do nothing
    }
  }
  return false
}

export {
  getHouseLabel,
  isActivateEvent
}
