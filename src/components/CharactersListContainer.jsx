import React, { Component } from 'react'

import { HeaderView } from './Common'

export default class CharactersListContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      characters: []
    }
  }
  render () {
    return (
      <main>
        <HeaderView />
        <h2>Characters</h2>
      </main>
    )
  }
}
