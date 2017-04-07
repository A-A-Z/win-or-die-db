import React, { Component } from 'react'
import { HeaderView, FooterView } from '../../Common'
import Data from '../../Data/Data'
import { DetailsView, NotFoundView } from './Views'

export default class CharacterDetailContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      key: props.match.params.charKey,
      character: null
    }
  }
  componentWillMount () {
    Data.indexData()
    this.setState({
      character: Data.getCharacter(this.state.key)
    })
  }
  render () {
    return (
      <div>
        <HeaderView />
        <main>
          <div className='container'>
            {(this.state.character)
              ? <DetailsView character={this.state.character} />
              : <NotFoundView />
            }
          </div>
        </main>
        <FooterView />
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
