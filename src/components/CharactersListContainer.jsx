import React, { Component } from 'react'
import { HeaderView, FooterView } from './Common'
import Data from './Data/Data'

export default class CharactersListContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      characters: []
    }
  }
  componentWillMount () {
    Data.indexData()
    console.log('Data.charactersIndex()', Data.charactersIndex)
    this.setState({
      characters: Data.getChatacters()
    })
  }
  render () {
    return (
      <div>
        <HeaderView />
        <main>
          <div className='container'>
            <h2>Characters!</h2>
            <ul>
              {this.state.characters.map((character, i) => {
                if (character.ischaracter && character.active) {
                  return (
                    <li key={character.nameshort}>
                      {character.namedisplay}
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </main>
        <FooterView />
      </div>
    )
  }
}
