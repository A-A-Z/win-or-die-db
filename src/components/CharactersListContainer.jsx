import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Data from './Data/Data'

export default class CharactersListContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      characters: []
    }
  }
  componentWillMount () {
    this.setState({
      characters: Data.getChatacters()
    })
  }
  render () {
    return (
      <div className='container'>
        <h2>Characters</h2>
        <ul>
          {this.state.characters.map((character, i) => {
            if (character.ischaracter && character.active) {
              return (
                <li key={character.nameshort}>
                  <Link to={`/Character/${character.nameshort}`}>{character.namedisplay}</Link>
                  {(character.factions.primary.length) ? <span> ({character.factions.primary[0].namedisplay})</span> : <span />}
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}
