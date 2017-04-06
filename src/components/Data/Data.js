import { CharactersData, CharFactionsData, FactionsData } from '../../data/'

export default class Data {
  static indexData () {
    this.charactersIndex = {}
    this.factionsIndex = {}

    for (let [index, entry] of CharactersData.entries()) {
      this.charactersIndex[entry.nameshort] = index
    }

    for (let [index, entry] of FactionsData.entries()) {
      this.factionsIndex[entry.nameshort] = index
    }
  }
  static getChatacters () {
    let chars = CharactersData

    for (let charFact of CharFactionsData) {
      let charIndex = this.charactersIndex[charFact.char]
      let factIndex = this.factionsIndex[charFact.faction]
      if (charFact.type === 'primary') {
        chars[charIndex].primFaction = FactionsData[factIndex]
      }
    }

    return chars
  }
}
