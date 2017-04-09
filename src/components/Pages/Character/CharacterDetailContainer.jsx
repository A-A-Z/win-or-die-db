import React, { Component } from 'react'
import Data from '../../Data/Data'
import { DetailsView } from './Views'
import { NotFoundView } from '../../Common'

export default class CharacterDetailContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      key: props.match.params.charKey,
      character: null
    }
  }
  componentWillMount () {
    this.setState({
      character: Data.getCharacter(this.state.key)
    })
  }
  render () {
    return (
      <div className='container'>
        {(this.state.character)
          ? <DetailsView character={this.state.character} />
          : <NotFoundView />
        }
      </div>
    )
  }
}

// Property Type Validation
const { string, shape } = React.PropTypes

CharacterDetailContainer.propTypes = {
  match: shape({
    params: shape({
      charKey: string.isRequired
    })
  })
}
