import { CharactersData, CharFactionsData, FactionsData } from '../../data/'

export default class Data {
  static indexData () {
    this.characters = []
    this.charactersIndex = {}
    this.factionsIndex = {}

    // run through Characters
    for (let [index, entry] of CharactersData.entries()) {
      let characterExtend = {
        factions: { primary: [], secondary: [] },
        titles: [],
        entrances: [],
        exits: []
      }
      this.characters.push(Object.assign(entry, characterExtend))
      this.charactersIndex[entry.nameshort] = index
    }

    // run through Factions
    for (let [index, entry] of FactionsData.entries()) {
      this.factionsIndex[entry.nameshort] = index
    }

    // run though Character-Factions
    for (let charFact of CharFactionsData) {
      let charIndex = this.charactersIndex[charFact.char]
      let factIndex = this.factionsIndex[charFact.faction]
      this.characters[charIndex].factions[charFact.type].push(FactionsData[factIndex])
    }
  }
  static getChatacters () {
    return this.characters
  }
}
