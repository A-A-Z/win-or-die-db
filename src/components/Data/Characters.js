import { CharactersData } from '../../data/'

export default class Characters {
  constructor() {
    this.charactersIndex = {}

    for (let entry of CharactersData) {
      charactersIndex[entry.nameshort] = entry
    }
  }
  static indexData () {
    this.charactersIndex = {}

    for (let entry of CharactersData) {
      charactersIndex[entry.nameshort] = entry
    }
  }
  static getChatacters () {
    let chars = CharactersData
    console.log('charactersIndex', charactersIndex)
    return chars
  }
}
