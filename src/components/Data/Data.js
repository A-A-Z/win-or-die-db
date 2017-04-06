import { CharactersData, FactionsData } from '../../data/'

export default class Data {
  static indexData () {
    this.charactersIndex = {}
    this.factionsIndex = {}

    for (let entry of CharactersData) {
      this.charactersIndex[entry.nameshort] = entry
    }

    for (let entry of FactionsData) {
      this.factionsIndex[entry.nameshort] = entry
    }
  }
  static getChatacters () {
    let chars = CharactersData

    return chars
  }
}
