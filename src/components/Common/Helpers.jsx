
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
  isActivateEvent
}
